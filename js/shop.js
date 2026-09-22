const makeCover = (title, subtitle) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="600" height="900" fill="#2f6b5e"/><rect x="28" y="28" width="544" height="844" rx="18" fill="none" stroke="#b89a5a" stroke-width="5"/><text x="300" y="330" text-anchor="middle" fill="#f6ecd6" font-size="34" font-family="Georgia,serif">ПУТЬ</text><text x="300" y="410" text-anchor="middle" fill="#f6ecd6" font-size="30" font-family="Georgia,serif">${title}</text><text x="300" y="470" text-anchor="middle" fill="#d8c28d" font-size="24" font-family="Georgia,serif">${subtitle}</text><text x="300" y="780" text-anchor="middle" fill="#f6ecd6" font-size="22" font-family="Georgia,serif">МИХАИЛ ИГНАТОВ</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const bookList = [
  { id: 1, title: "Пустошь. Нулевой круг", vol: "Книга 1", price: "—", cover: "https://cm.author.today/content/2021/12/14/103afbbc14eb47f2ba729c116372033b.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Пустошь+Нулевой+круг+Михаил+Игнатов", desc: "Мир Древних пал в яростном огне, а на месте великих городов — лишь исчезающие под песком руины. Но даже здесь есть место жизни и надежде. Вот только упавшие сюда ценят лишь силу." },
  { id: 2, title: "Школа. Первый пояс", vol: "Книга 2", price: "—", cover: "https://cm.author.today/content/2020/01/04/142c5d2c4d984cc28d9f53986814dc7b.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Школа+Первый+пояс+Михаил+Игнатов", desc: "Старые стены, видевшие тысячи таких, как ты, учеников. Место, где тебя должны учить, но ценят только победы в схватках и успехи в возвышении." },
  { id: 3, title: "Морозная гряда. Первый пояс", vol: "Книга 3", price: "—", cover: "https://cm.author.today/content/2020/01/04/d60ef078b40243a1983853beadc8f420.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Морозная+гряда+Михаил+Игнатов", desc: "Леса, что таят под своей сенью тысячи свирепых зверей. Место, где тебя ждут приключения, сражения и опасные тайны." },
  { id: 4, title: "Путь силы. Первый пояс", vol: "Книга 4", price: "—", cover: "https://cm.author.today/content/793914834aa749b1abd194ad80211e3f.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Путь+силы+Михаил+Игнатов", desc: "Путь, на который ты ступил ради других. Город, где тебе сулят их спасение. Испытание, что больше походит на глупость. И решимость идти до конца." },
  { id: 5, title: "Исход. Первый пояс", vol: "Книга 5", price: "—", cover: "https://cm.author.today/content/2020/09/20/339433f8003744f2a8c0a0b37577e935.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Исход+Первый+пояс+Михаил+Игнатов", desc: "На землях предков, куда ты когда-то так рвался, ещё никогда твой путь не шёл так, как задумывалось." },
  { id: 6, title: "Лекарь. Второй пояс", vol: "Книга 6", price: "—", cover: "https://cm.author.today/content/2021/02/17/a9c565c447274fb0b6cded60a5ed6644.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Лекарь+Второй+пояс+Михаил+Игнатов", desc: "Сила и талант заставляют тебя искать свой путь, а не идти по проторённому. Ты надеешься перехитрить всех и пройти там, где другие пропали без следа." },
  { id: 7, title: "Искатель. Второй пояс", vol: "Книга 7", price: "—", cover: "https://cm.author.today/content/2021/05/15/038ee450f5a54c27b387e7c206e55196.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Искатель+Второй+пояс+Михаил+Игнатов", desc: "Клятвы о смерти врагов, которые ты когда-то давал… Ложные.  Ты уже дважды прощал своих врагов. И то, что один из них носит на себе твой Указ «Смерть» ничего толком не меняет. Но у тебя не было другого выхода. Твоей силы и удачи хватило, чтобы выжить, но впереди лишь новые испытания." },
  { id: 8, title: "Беглец. Второй пояс", vol: "Книга 8", price: "—", cover: "https://cm.author.today/content/2022/01/27/1462f404d5cf4ba995106a0b0cbcf6b7.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Беглец+Второй+пояс+Михаил+Игнатов", desc: "Подземелья Тёмного Предводителя позади. И сотни мертвых тел в его залах. Но впереди лишь новые враги. И когда хочется решить все одним Указом Смерть, приходится одёргивать себя. Ведь ты слишком многим обязан тем, кто носит имя Тамим." },
  { id: 9, title: "Ученик. Второй пояс", vol: "Книга 9", price: "—", cover: "https://cm.author.today/content/2022/01/17/5cf3b324fb4f4757b8ef717924454dfe.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Ученик+Второй+пояс+Михаил+Игнатов", desc: "В землях далекого Ордена Небесного Меча герой пытается достичь своих целей и проверяет на прочность свой и чужой путь к Небу. Погоня, неприятности, лишения позади. Впереди Орден, который Страж приказал сделать сильней, чтобы это ни значило." },
  { id: 10, title: "Защитник. Второй пояс", vol: "Книга 10", price: "—", cover: "https://cm.author.today/content/2022/05/13/305db70d7ecd4e88993a495539d72081.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Защитник+Второй+пояс+Михаил+Игнатов", desc: "У подножия горы Меча герой пытается выжить и проверяет на прочность свой и чужой путь к Небу. Открылся главе Академии, рассказал ему зачем и кем был сюда отправлен? Молодец. Сделать Орден Небесного Меча сильней? Отлично, только для начала нужно не позволить его уничтожить." },
  { id: 11, title: "Имперец. Земли Итреи", vol: "Книга 11", price: "—", cover: "https://cm.author.today/content/2022/12/05/5b4ab6703812415396679253d8298256.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Имперец+Земли+Итреи+Михаил+Игнатов", desc: "В землях сектантов герой пытается выжить и проверяет на прочность начертанный ему духом Изардом путь к Небу. А может быть, прокладывает свой. Если, конечно, забыть о Небе, которое смотрит на всех." },
  { id: 12, title: "Чемпион. Второй пояс", vol: "Книга 12", price: "—", cover: "https://cm.author.today/content/2023/06/15/a4e25201a2084a659e21b84452e625f8.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Чемпион+Второй+пояс+Михаил+Игнатов", desc: "Снова Второй пояс. У героя здесь есть немало долгов, а он не любит, чтобы они повисали на нем грузом. Он идет навстречу Небу свободный от всех обязательств. А еще Второй пояс полон врагов, которые тоже не прочь взыскать долги." },
  { id: 13, title: "Разочарование. Пятый пояс", vol: "Книга 13", price: "—", cover: "https://cm.author.today/content/2023/10/17/bb1d6c11299047ce9a4b839d781ba1fa.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Разочарование+Пятый+пояс+Михаил+Игнатов", desc: "Ты добился своего: Орден Небесного Меча победил на турнире клан Дизир, невзирая на все его уловки, объединённые силы и сговор со старейшинами Гарой. Ты сделал даже больше – всучил Дизир отравленный приз – город Тысячи Этажей. Но…" },
  { id: 14, title: "Осознание. Пятый пояс", vol: "Книга 14", price: "—", cover: "https://cm.author.today/content/2023/10/17/fa1e09cbac064b0d91b7dcb51baad7d1.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Осознание+Пятый+пояс+Михаил+Игнатов", desc: "Разочарование Поднебесной Империей позади. Ты уже пережил его и начал понимать, что она из себя представляет. Битва с предателями и големами Древних тоже позади, казалось бы, можно оставить в прошлом этот проклятый город Ян и с чистой совестью жить так, как хочется, тем более, что и учитель, кажется нашёлся." },
  { id: 15, title: "Пробуждение. Пятый пояс", vol: "Книга 15", price: "—", cover: "https://cm.author.today/content/2024/01/22/2a85c04b3d0f447fb700db7477cc1557.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Пробуждение+Пятый+пояс+Михаил+Игнатов", desc: "Месяцы, прожитые в Пятом, события, в которых участвовал герой, испытание Зала Стражей -- ничего из этого не прошло для героя без последствий. Он многое понял, многое осознал, многое решил для себя. Путь, который он выбрал, не будет легким и простым. И путь этот начнется отсюда. Пока у героя есть только Седой, но так будет не всегда. Главное, пока самому Седому об этом не говорить." },
  { id: 16, title: "Основание. Пятый пояс", vol: "Книга 16", price: "—", cover: "https://cm.author.today/content/2024/06/07/59316bc1947946a794730d482a7866f0.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Основание+Пятый+пояс+Михаил+Игнатов", desc: "Регистрация Сломанного Клинка позади, Орден поделен на верных и самых верных. Одни идут за тобой в Каменный Лабиринт, другие же должны уверить врагов, что Орден Небесного Меча распался. Ты ведешь верных за собой, ты пообещал им будущее, ты обещал им цель, ты обещал им перековать Сломанный Клинок и не намерен отказываться от своих слов." },
  { id: 17, title: "Возвышение. Земли Ордена", vol: "Книга 17", price: "—", cover: "https://cm.author.today/content/2024/10/17/da3d2119681d4653b716bf3598b6f234.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Возвышение+Земли+Ордена+Михаил+Игнатов", desc: "Каменный Лабиринт пройден. Ключ в твоих руках. Исток объявлен городом Сломанного Клинка. Платой стали могилы искателей на краю ущелья, рядом с тем местом, что их убило." },
  { id: 18, title: "Испытания. Земли Ордена", vol: "Книга 18", price: "—", cover: "https://cm.author.today/content/2025/02/11/e951a737c92b4b7aae9ab22c98c8225f.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Испытания+Земли+Ордена+Михаил+Игнатов", desc: "Итак, они возвышались, пили, играли на цине и наслаждались полетами, наконец вернулись, а тут... Вдруг как взорвались зажжённые ящики! И так грохнуло, будто бы тысячи громов в одном месте ударили и тысячи молний из одной тучи сверкнули." },
  { id: 19, title: "Перековка. Перевернутое Небо", vol: "Книга 19", price: "—", cover: "https://cm.author.today/content/2025/07/08/01480490f1844d5eb9272577a86f34e4.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Перековка+Перевернутое+Небо+Михаил+Игнатов", desc: "Ты выжил в ловушке, из которой уже сотни лет никто не выбирался. Да, ты выжил, но вот многие из собратьев — нет. И даже смерть безумного духа не сильно смягчает горечь этой потери и твоей вины. Ты, глава Сломанного Клинка, магистр Скрытого Ордена, привёл их в эту ловушку, привёл их на эту смерть." },
  { id: 20, title: "Перековка. Малый орден", vol: "Книга 20", price: "—", cover: "https://cm.author.today/content/2025/11/20/3238800e098543aebdeeebf842c28895.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Перековка+Малый+орден+Михаил+Игнатов", desc: "Раздача старых долгов прошла... странно. Совсем не этого ты ожидал, выбирая своё и только своё. Мелькнула даже мысль: не закончить ли это всё здесь и сейчас? Но переход в город Тысячи Этажей закрыт, а значит, Небо указывает на другой путь." },
  { id: 21, title: "Освобождение. Потерянный Орден", vol: "Книга 21", price: "—", cover: "https://cm.author.today/content/2026/03/24/b1dd34f534184f5f849a7ced4d78f200.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Освобождение+Потерянный+Орден+Михаил+Игнатов", desc: "Следы Потерянного Ордена ведут к тайнам и борьбе за свободу." },
  { id: 22, title: "Путь Гнева. Земли Империи", vol: "Книга 22", price: "—", cover: "https://cm.author.today/content/2026/08/03/54003d8f18a8490189f4efbe11f39eb3.jpg", authorToday: "https://author.today/work/series/5008", ozon: "https://www.ozon.ru/search/?text=Путь+Гнева+Земли+Империи+Михаил+Игнатов", desc: "В Землях Империи путь героя приводит к новой грани силы и гнева." }
];

const grid = document.getElementById('shopGrid');

bookList.forEach(b => {
  const card = document.createElement('article');
  card.className = 'shop-card slider-cover-match';
  card.innerHTML = `
        <div class="shop-cover" style="background-image:url('${b.cover}')"></div>
        <span class="shop-vol">${b.vol}</span>
        <h3>${b.title}</h3>
        <p class="shop-desc">${b.desc}</p>
        <div class="shop-foot">
            <a class="ozon-btn" href="${b.ozon}" target="_blank" rel="noopener"
               aria-label="Купить «${b.title}» на OZON">
                <span class="ozon-mark">O</span>
                <span class="cart">🛒</span>
                Купить на OZON
            </a>
        </div>`;

  card.addEventListener('click', event => {
    if (event.target.closest('.ozon-btn')) return;
    if (window.openBookModal) window.openBookModal(b);
  });
  grid.appendChild(card);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (e.target.dataset.delay || '0') + 'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.shop-card').forEach((el, i) => {
  el.dataset.delay = (i % 4) * 70;
  io.observe(el);
});
