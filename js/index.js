
const books = [
    { name: "Пустошь. Нулевой круг", vol: "Книга 1", cover: "https://cm.author.today/content/2021/12/14/103afbbc14eb47f2ba729c116372033b.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Пустошь+Нулевой+круг+Михаил+Игнатов" },
    { name: "Школа. Первый пояс", vol: "Книга 2", cover: "https://cm.author.today/content/2020/01/04/142c5d2c4d984cc28d9f53986814dc7b.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Школа+Первый+пояс+Михаил+Игнатов" },
    { name: "Морозная гряда. Первый пояс", vol: "Книга 3", cover: "https://cm.author.today/content/2020/01/04/d60ef078b40243a1983853beadc8f420.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Морозная+гряда+Михаил+Игнатов" },
    { name: "Путь силы. Первый пояс", vol: "Книга 4", cover: "https://cm.author.today/content/793914834aa749b1abd194ad80211e3f.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Путь+силы+Михаил+Игнатов" },
    { name: "Исход. Первый пояс", vol: "Книга 5", cover: "https://cm.author.today/content/2020/09/20/339433f8003744f2a8c0a0b37577e935.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Исход+Первый+пояс+Михаил+Игнатов" },
    { name: "Лекарь. Второй пояс", vol: "Книга 6", cover: "https://cm.author.today/content/2021/02/17/a9c565c447274fb0b6cded60a5ed6644.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Лекарь+Второй+пояс+Михаил+Игнатов" },
    { name: "Искатель. Второй пояс", vol: "Книга 7", cover: "https://cm.author.today/content/2021/05/15/038ee450f5a54c27b387e7c206e55196.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Искатель+Второй+пояс+Михаил+Игнатов" },
    { name: "Беглец. Второй пояс", vol: "Книга 8", cover: "https://cm.author.today/content/2022/01/27/1462f404d5cf4ba995106a0b0cbcf6b7.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Беглец+Второй+пояс+Михаил+Игнатов" },
    { name: "Ученик. Второй пояс", vol: "Книга 9", cover: "https://cm.author.today/content/2022/01/17/5cf3b324fb4f4757b8ef717924454dfe.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Ученик+Второй+пояс+Михаил+Игнатов" },
    { name: "Защитник. Второй пояс", vol: "Книга 10", cover: "https://cm.author.today/content/2022/05/13/305db70d7ecd4e88993a495539d72081.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Защитник+Второй+пояс+Михаил+Игнатов" },
    { name: "Имперец. Земли Итреи", vol: "Книга 11", cover: "https://cm.author.today/content/2022/12/05/5b4ab6703812415396679253d8298256.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Имперец+Земли+Итреи+Михаил+Игнатов" },
    { name: "Чемпион. Второй пояс", vol: "Книга 12", cover: "https://cm.author.today/content/2023/06/15/a4e25201a2084a659e21b84452e625f8.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Чемпион+Второй+пояс+Михаил+Игнатов" },
    { name: "Разочарование. Пятый пояс", vol: "Книга 13", cover: "https://cm.author.today/content/2023/10/17/bb1d6c11299047ce9a4b839d781ba1fa.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Разочарование+Пятый+пояс+Михаил+Игнатов" },
    { name: "Осознание. Пятый пояс", vol: "Книга 14", cover: "https://cm.author.today/content/2023/10/17/fa1e09cbac064b0d91b7dcb51baad7d1.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Осознание+Пятый+пояс+Михаил+Игнатов" },
    { name: "Пробуждение. Пятый пояс", vol: "Книга 15", cover: "https://cm.author.today/content/2024/01/22/2a85c04b3d0f447fb700db7477cc1557.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Пробуждение+Пятый+пояс+Михаил+Игнатов" },
    { name: "Основание. Пятый пояс", vol: "Книга 16", cover: "https://cm.author.today/content/2024/06/07/59316bc1947946a794730d482a7866f0.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Основание+Пятый+пояс+Михаил+Игнатов" },
    { name: "Возвышение. Земли Ордена", vol: "Книга 17", cover: "https://cm.author.today/content/2024/10/17/da3d2119681d4653b716bf3598b6f234.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Возвышение+Земли+Ордена+Михаил+Игнатов" },
    { name: "Испытания. Земли Ордена", vol: "Книга 18", cover: "https://cm.author.today/content/2025/02/11/e951a737c92b4b7aae9ab22c98c8225f.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Испытания+Земли+Ордена+Михаил+Игнатов" },
    { name: "Перековка. Перевернутое Небо", vol: "Книга 19", cover: "https://cm.author.today/content/2025/07/08/01480490f1844d5eb9272577a86f34e4.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Перековка+Перевернутое+Небо+Михаил+Игнатов" },
    { name: "Перековка. Малый орден", vol: "Книга 20", cover: "https://cm.author.today/content/2025/11/20/3238800e098543aebdeeebf842c28895.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Перековка+Малый+орден+Михаил+Игнатов" },
    { name: "Освобождение. Потерянный Орден", vol: "Книга 21", cover: "https://cm.author.today/content/2026/03/24/b1dd34f534184f5f849a7ced4d78f200.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Освобождение+Потерянный+Орден+Михаил+Игнатов" },
    { name: "Путь Гнева. Земли Империи", vol: "Книга 22", cover: "https://cm.author.today/content/2026/08/03/54003d8f18a8490189f4efbe11f39eb3.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Путь+Гнева+Земли+Империи+Михаил+Игнатов" }
];

(function buildSlider() {
    const viewport = document.getElementById('sliderViewport');
    const track = document.getElementById('sliderTrack');
    if (!viewport || !track) return;

    [...books, ...books, ...books].forEach(b => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Подробнее: ${b.name}`);
        card.innerHTML =
            `<div class="book-cover" style="background-image:url('${b.cover}')"></div>
             <div class="book-info"><span class="vol">${b.vol}</span><h3>${b.name}</h3></div>`;
        const open = () => {
            // Если перед кликом была протяжка слайдера, не открываем книгу.
            // Сбрасываем флаг сразу, чтобы следующий обычный клик работал.
            if (moved) { moved = false; return; }
            if (window.openBookModal) window.openBookModal(b);
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
        track.appendChild(card);
    });

    let pos = 0;
    let single = 0;
    let dragging = false, startX = 0, startPos = 0, moved = false;
    let lastInteraction = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let lastFrame = performance.now();
    const AUTO_SPEED = 0.35;
    const AUTO_DELAY = 2500;
    const FRICTION = 0.92;

    function measure() {
        single = track.scrollWidth / 3;
        if (single > 0 && pos === 0) pos = -single;
    }
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);
    measure();

    function wrap() {
        if (single <= 0) return;
        while (pos <= -2 * single) pos += single;
        while (pos > -single) pos -= single;
    }
    function apply() { track.style.transform = `translate3d(${pos}px, 0, 0)`; }

    viewport.addEventListener('pointerdown', e => {
        dragging = true; moved = false;
        startX = e.clientX; startPos = pos;
        lastX = e.clientX; lastTime = performance.now();
        velocity = 0;
        lastInteraction = Date.now();
        viewport.classList.add('dragging');
        viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener('pointermove', e => {
        if (!dragging) return;
        const now = performance.now();
        const dx = e.clientX - startX;
        const dt = Math.max(8, now - lastTime);
        if (Math.abs(dx) > 4) moved = true;
        pos = startPos + dx;
        velocity = (e.clientX - lastX) / dt * 16;
        lastX = e.clientX;
        lastTime = now;
        lastInteraction = Date.now();
        wrap(); apply();
    });
    function endDrag() {
        if (!dragging) return;
        dragging = false;
        lastInteraction = Date.now();
        viewport.classList.remove('dragging');
    }
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('pointerleave', endDrag);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    (function loop(now = performance.now()) {
        const dt = Math.min(32, now - lastFrame) / 16.67;
        lastFrame = now;
        const idle = Date.now() - lastInteraction > AUTO_DELAY;

        if (!dragging) {
            if (Math.abs(velocity) > 0.05) {
                pos += velocity * dt;
                velocity *= Math.pow(FRICTION, dt);
                wrap(); apply();
            } else if (idle && !reduceMotion) {
                pos -= AUTO_SPEED * dt;
                wrap(); apply();
            }
        }
        requestAnimationFrame(loop);
    })();
})();

(function reviews() {
    const layout = document.getElementById('reviewsLayout');
    const list = document.getElementById('reviewsList');
    const form = document.getElementById('reviewForm');
    if (!form) return;

    let items = [];

    const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    function today() {
        const d = new Date();
        return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    }
    function esc(s) {
        return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function render() {
        layout.classList.toggle('is-empty', items.length === 0);
        list.innerHTML = items.map(c => `
            <div class="review-item">
                <div class="review-head">
                    <span class="review-author">${esc(c.author)}</span>
                    <span class="review-date">${c.date}</span>
                </div>
                <p class="review-text">${esc(c.text)}</p>
            </div>`).join('');
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('r-name').value.trim();
        const text = document.getElementById('r-message').value.trim();
        if (!name || !text) return;
        items.unshift({ author: name, text, date: today() });
        render();
        form.reset();
    });

    render();
})();
