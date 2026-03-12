document.addEventListener("DOMContentLoaded", () => {
    

    // 1. НАША БАЗА: СТРОГОЕ БОКОВОЕ МЕНЮ БЕЗ АНИМАЦИЙ
    const sidebarHTML = `
        <div class="mobile-header">
            <a href="index.html" class="mobile-logo">
                <img src="FSlogo.svg" alt="FeySwitch Logo" height="30">
            </a>
            <button id="menuBtn" class="menu-btn" aria-label="Открыть меню">☰</button>
        </div>
        <div id="overlay" class="overlay"></div>

        <aside id="sidebar" style="display: flex; flex-direction: column;">
            <a href="index.html" class="logo" style="text-decoration: none; display: flex; align-items: center;">
                <img src="FSlogo.svg" alt="FeySwitch" style="max-width: 100%; height: 40px; display: block;">
            </a>

            <nav style="flex-grow: 1;">
                <!-- ГЛАВНАЯ -->
                <ul class="nav-list" style="margin-bottom: 24px;">
                    <li>
                        <a href="index.html" class="sub-category" style="padding-bottom: 12px; border-bottom: 1px solid var(--border-color); border-radius: 0;">
                            <svg aria-hidden="true" viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: currentColor;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                            Главная
                        </a>
                    </li>
                </ul>

                <!-- КАТЕГОРИЯ: ПРОШИВКИ -->
                <div class="category-title">Прошивки</div>
                <ul class="nav-list">
                    <li>
                        <a href="UltraNX.html">
                            <img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">
                            UltraNX
                        </a>
                    </li>
                    <li>
                        <a href="4IFIR.html">
                            <img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">
                            4IFIR
                        </a>
                    </li>
                    <!-- Последний пункт категории: ArrowClose -->
                    <li>
                        <a href="Kefir.html">
                            <img src="assets/ArrowClose.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">
                            Kefir
                        </a>
                    </li>
                </ul>

                <!-- КАТЕГОРИЯ: МОДЧИПЫ -->
                <div class="category-title category-spacing">Модчипы</div>
                <ul class="nav-list">
                    <!-- Единственный и последний пункт: ArrowClose -->
                    <li>
                        <a href="PicoFly.html">
                            <img src="assets/ArrowClose.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">
                            PicoFly RP2040
                        </a>
                    </li>
                </ul>



                <!-- КАТЕГОРИЯ: ГАЙДЫ -->
                <div class="category-title category-spacing menu-anim" style="--i: 8">Гайды</div>
                <ul class="nav-list">
                    <li class="menu-anim" style="--i: 9"><a href="InstallGames.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Установка игр (DBI)</a></li>
                    <li class="menu-anim" style="--i: 10"><a href="HBMenuShortcut.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Ярлык Homebrew</a></li>
                    <li class="menu-anim" style="--i: 11"><a href="UpdateFirmware.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Обновление прошивки</a></li>
                    <!-- Новый пункт с закрывающей стрелочкой -->
                    <li class="menu-anim" style="--i: 12"><a href="ThemesGuide.html"><img src="assets/ArrowClose.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Установка тем</a></li>
                </ul>


                <!-- КАТЕГОРИЯ: ПОЛЕЗНЫЕ ФИШКИ -->
                <div class="category-title category-spacing menu-anim" style="--i: 16">Полезные фишки</div>
                <ul class="nav-list">
                    <li class="menu-anim" style="--i: 17"><a href="MissionControl.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Любые геймпады (PS/Xbox)</a></li>
                    <li class="menu-anim" style="--i: 18"><a href="Mods.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Русификаторы и Моды</a></li>
                    <li class="menu-anim" style="--i: 19"><a href="Amiibo.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Эмуляция Amiibo</a></li>
                    <li class="menu-anim" style="--i: 20"><a href="Cheats.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Читы в играх (EdiZon)</a></li>
                    <li class="menu-anim" style="--i: 21"><a href="Moonlight.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">ПК игры на Switch</a></li>
                    <li class="menu-anim" style="--i: 22"><a href="SysDVR.html"><img src="assets/ArrowClose.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Стрим экрана без карты</a></li>
                </ul>

                <!-- НОВАЯ КАТЕГОРИЯ: ИНСТРУМЕНТЫ -->
                <div class="category-title category-spacing menu-anim" style="--i: 23">Инструменты (Web)</div>
                <ul class="nav-list">
                    <li class="menu-anim" style="--i: 24"><a href="TitleID.html"><img src="assets/Arrow.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Поиск TitleID игр</a></li>
                    <li class="menu-anim" style="--i: 25"><a href="SDCalc.html"><img src="assets/ArrowClose.svg" alt="" style="width: 14px; height: 14px; opacity: 0.5;">Калькулятор SD-карты</a></li>
                </ul>
            </nav>







            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-color);">
                <a href="https://t.me/feylons" target="_blank" class="btn" style="background-color: #2481cc; color: white; width: 100%; justify-content: center; font-size: 0.85rem; padding: 12px 10px;">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    Связь: @feylons
                </a>
            </div>
        </aside>
    `;


    // 2. Вставляем меню
    const container = document.getElementById("sidebar-container");
    if (container) {
        container.innerHTML = sidebarHTML;
    }

    // 3. Подсветка активной ссылки
    let path = window.location.pathname;
    let page = path.split("/").pop();
    if (page === '' || page === '/') page = 'index.html';

    const links = document.querySelectorAll('#sidebar nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Мобильное меню
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
        document.body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "";
    };

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", toggleMenu);

    // ==========================================
    // 5. АНИМАЦИЯ ПЕРЕХОДА МЕЖДУ СТРАНИЦАМИ (Остается только для контента!)
    // ==========================================
    const mainContent = document.querySelector('main');
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');

            if (!href || href.startsWith('http') || target === '_blank' || href.startsWith('#')) return;
            if (href === page) { e.preventDefault(); return; }

            e.preventDefault();

            if (sidebar && sidebar.classList.contains('open')) toggleMenu();
            if (mainContent) mainContent.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 150);
        });
    });
});
