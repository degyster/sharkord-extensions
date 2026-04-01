// ==UserScript==
// @name         Sharkord Web Enhancer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fullscreen, PiP, and Audio Loopback Fix for Sharkord
// @author       YourName
// @run-at       document-start
// @grant        none

// === НАСТРОЙКА САЙТА ===
// Замените адрес ниже на IP вашего сервера или домен (например, *://192.168.1.228:4991/*)
// @match        *://ВАШ_АДРЕС_СЕРВЕРА_ТУТ/*
// ========================

// ==/UserScript==

(function() {
    'use strict';

    // 1. ИСПРАВЛЕНИЕ ЭХА (Аппаратная изоляция звука вкладки)
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getDisplayMedia = async function(constraints) {
            constraints = constraints || { video: true, audio: true };
            if (constraints.audio === true) constraints.audio = {};
            if (typeof constraints.audio === 'object') {
                constraints.audio.restrictOwnAudio = true; 
            }
            return originalGetDisplayMedia(constraints);
        };
    }

    // 2. СТИЛИ ДЛЯ КНОПОК
    const css = `
        .sh-custom-panel {
            position: absolute; top: 8px; left: 8px; z-index: 50;
            display: flex; gap: 6px; opacity: 0; transition: opacity 0.2s;
        }
        .group:hover .sh-custom-panel { opacity: 1; }
        .sh-btn {
            background: rgba(0,0,0,0.6); color: white; border: 1px solid rgba(255,255,255,0.2);
            border-radius: 4px; padding: 4px; cursor: pointer; display: flex;
        }
        .sh-btn:hover { background: rgba(0,0,0,0.8); }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    // 3. ДОБАВЛЕНИЕ КНОПОК НА ВИДЕО
    function addControls() {
        document.querySelectorAll('video').forEach(video => {
            const container = video.closest('.group') || video.parentElement;
            if (!container || container.querySelector('.sh-custom-panel')) return;

            const panel = document.createElement('div');
            panel.className = 'sh-custom-panel';

            // Кнопка PiP
            const pipBtn = document.createElement('button');
            pipBtn.className = 'sh-btn';
            pipBtn.title = 'Картинка в картинке';
            pipBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><rect width="6" height="4" x="13" y="13" rx="1" ry="1"/><path d="M13 13h6v4h-6z"/></svg>';
            pipBtn.onclick = (e) => {
                e.stopPropagation();
                if (document.pictureInPictureElement) document.exitPictureInPicture();
                else video.requestPictureInPicture();
            };

            // Кнопка Fullscreen
            const fsBtn = document.createElement('button');
            fsBtn.className = 'sh-btn';
            fsBtn.title = 'Полный экран';
            fsBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>';
            fsBtn.onclick = (e) => {
                e.stopPropagation();
                if (!document.fullscreenElement) container.requestFullscreen();
                else document.exitFullscreen();
            };

            panel.appendChild(pipBtn);
            panel.appendChild(fsBtn);
            container.appendChild(panel);
        });
    }

    const observer = new MutationObserver(addControls);
    window.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
        addControls();
    });
})();
