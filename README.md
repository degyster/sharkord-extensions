# Sharkord Web Enhancer 🚀

*(English version below)*

Легкий скрипт (userscript) для Tampermonkey, который решает самые раздражающие проблемы текущей альфа-версии Sharkord и добавляет недостающие функции управления видео.

### ✨ Главные функции
* **🔇 Исправление эха аудио:** Использует аппаратную изоляцию (`restrictOwnAudio`), чтобы ваши собеседники не слышали сами себя (петля обратной связи) во время вашей демонстрации экрана со звуком.
* **📺 Картинка в картинке (PiP):** Позволяет вынести чужую трансляцию экрана или веб-камеру в плавающее системное окно и смотреть её, сидя в других вкладках.
* **🔲 Полноэкранный режим:** Добавляет нативную кнопку развертывания любого видео или трансляции на весь монитор в один клик.

### 🛠 Установка
1. Установите расширение [Tampermonkey](https://www.tampermonkey.net/) для вашего браузера.
2. Нажмите "Создать новый скрипт" (Create a new script) и вставьте код из файла `script.js` (или `sharkord-enhancer.js`).
3. **Важно:** В заголовке скрипта измените строку `@match` на IP-адрес или домен вашего сервера Sharkord.
4. Сохраните скрипт и обновите вкладку с Sharkord (`Ctrl + F5`).

### ⚙️ Настройка
В самом начале скрипта найдите следующую строку:
`// @match *://ВАШ_АДРЕС_СЕРВЕРА_ТУТ/*`
Замените `ВАШ_АДРЕС_СЕРВЕРА_ТУТ` на ваш реальный адрес (например, `192.168.1.228:4991` или `sharkord.mydomain.com`).

---

<br>

# Sharkord Web Enhancer 🚀 (English)

A lightweight Tampermonkey userscript that solves common issues in the current Sharkord alpha builds and adds missing video control features.

### ✨ Key Features
* **🔇 Audio Echo Fix:** Uses hardware-level isolation (`restrictOwnAudio`) to prevent participants from hearing their own voices looped back during your full-screen share.
* **📺 Picture-in-Picture (PiP):** Watch screen shares or webcams in a floating system window while browsing other tabs or apps.
* **🔲 Fullscreen Mode:** Adds a dedicated button to toggle true fullscreen for any video stream or screen share with a single click.

### 🛠 Installation
1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. Create a new script in the extension and paste the code from `script.js` (or `sharkord-enhancer.js`).
3. **Important:** Change the `@match` line in the script header to match your server's IP address or domain.
4. Save the script and hard-refresh your Sharkord tab (`Ctrl + F5`).

### ⚙️ Configuration
In the script header, look for the following line:
`// @match *://YOUR_SERVER_ADDRESS_HERE/*`
Replace `YOUR_SERVER_ADDRESS_HERE` with your actual server address (e.g., `192.168.1.228:4991` or `sharkord.mydomain.com`).
