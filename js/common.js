// Active меню
(function markActiveNav() {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        const href = a.getAttribute('href').split('/').pop();
        if (href === current) a.classList.add('active');
    });
})();

// Плавное появление ключевых блоков при прокрутке.
(function initRevealAnimations() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors = 'header, main, .author, .slider-section, .reviews-section, .shop, .heroes, .map-section, .chat-section, footer, .section-title, .eyebrow, .review-item';
    const elements = [...new Set(document.querySelectorAll(selectors))];
    elements.forEach((el, index) => {
        if (el.classList.contains('shop-card')) return;
        el.classList.add('js-reveal');
        if (index % 5 === 1) el.classList.add('reveal-left');
        if (index % 5 === 3) el.classList.add('reveal-right');
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    elements.forEach(el => observer.observe(el));
})();

// Общее модальное окно с подробностями книги для главной страницы и магазина.
(function initBookModal() {
    const modal = document.createElement('div');
    modal.className = 'book-modal';
    modal.hidden = true;
    modal.innerHTML = `
        <div class="book-modal__backdrop" data-close-modal></div>
        <div class="book-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="bookModalTitle">
            <button class="book-modal__close" type="button" aria-label="Закрыть" data-close-modal>×</button>
            <div class="book-modal__cover" id="bookModalCover"></div>
            <div class="book-modal__content">
                <span class="book-modal__vol" id="bookModalVol"></span>
                <h2 id="bookModalTitle"></h2>
                <p id="bookModalDesc"></p>
                <div class="book-modal__actions"><a id="bookModalBuy" class="ozon-btn book-modal__buy" target="_blank" rel="noopener"><span class="ozon-mark">O</span>Купить на OZON</a><a id="bookModalAuthorToday" class="author-today-btn book-modal__buy" target="_blank" rel="noopener">Купить на Author.Today</a></div>
            </div>
        </div>`;
    document.body.appendChild(modal);

    function close() {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
    }
    modal.addEventListener('click', event => { if (event.target.closest('[data-close-modal]')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) close(); });

    window.openBookModal = function(book) {
        document.getElementById('bookModalCover').style.backgroundImage = `url("${book.cover}")`;
        document.getElementById('bookModalVol').textContent = book.vol || '';
        document.getElementById('bookModalTitle').textContent = book.title || book.name || '';
        document.getElementById('bookModalDesc').textContent = book.desc || 'Откройте книгу, чтобы продолжить знакомство с циклом «Путь».';
        const buy = document.getElementById('bookModalBuy');
        buy.href = book.ozon || '#';
        const authorToday = document.getElementById('bookModalAuthorToday');
        authorToday.href = book.authorToday || 'https://author.today/work/series/5008';
        modal.hidden = false;
        document.body.classList.add('modal-open');
    };
})();
