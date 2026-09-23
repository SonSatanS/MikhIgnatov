const heroes = [
  {
    name: "Леград",
    tagline: "Собиратель камней из Нулевого",
    role: "Главный герой",
    bio: "Фанат боя на грани, безумств и безрассудств, господин верных, жаждущих мести и отчаявшихся, дающий надежду, веру и возможности, меняющий лица и личности, верящий в добродетели, причиняющий справедливость, лекарь душ, боевой мастер указов, талант копья, все это - наш с вами любимый главный герой.",
    avatar: "images/heroes/Legrad.png"
  },
  {
    name: "Аранви",
    tagline: "Клинок Семи ночей",
    role: "Наставник",
    bio: "Верный соратник и близкий друг главного героя, ставший отправной точкой восстановления Ордена Небесного Меча.",
    avatar: "images/heroes/Aranvi.jpeg"
  },
  {
    name: "Пересмешник",
    tagline: "Невидимый, неощутимый и смертельно опасный",
    role: "Телохранитель",
    bio: "Незримый убийца, нашедший в Леграде возможность отомстить за любимую и детей клану Эрзум, но получивший гораздо большее, чем просто месть.",
    avatar: "images/heroes/Peresmeshnik.png"
  },
  {
    name: "Райгвар",
    tagline: "Друг из далекой секты",
    role: "Наследник секты Тигров",
    bio: "Талант, равный Леграду, боевой мастер указов, умеющий слушать чужую мыслеречь, открытый враг и скрытый друг.",
    avatar: "images/heroes/Raygvar.jpeg"
  },
  {
    name: "Аледо",
    tagline: "Потерявшая все и обретшая семью",
    role: "Ученица",
    bio: "Дочь бывшего пленителя главного героя, ныне ученица Леграда, она жаждет силы и готова пойти за героем куда угодно. Обучается в Академии Небесного Меча.",
    avatar: "images/heroes/Aledo.png"
  },
  {
    name: "Эрдас",
    tagline: "Дух древних, осквернивший себя ритуалами",
    role: "Обезумевший хранитель",
    bio: "Великий дух разрушенного города Древних пятого пояса, обезумевший и погрязший в грязи за годы настолько, что решил поглотить своих собратьев-духов с помощью сектантских ритуалов. Нашел в Леграде шанс освободиться от оков создателей, но при попытке поглотить душу главного героя был поглощен сан. Часть духа навсегда останется в Леграде.",
    avatar: "images/heroes/BezumniyDuh.jpg"
  },
  {
    name: "Холгар",
    tagline: "Проверяющий и карающий реол Стражей",
    role: "Страж границ",
    bio: "Жестокий и хитрый, подчиняется напрямую императору Раму Вилору, но, похоже, втайне симпатизирует Ордену Небесного Меча. Дал задания Сломаному Клинку восстать, а Леграду помочь в его восстановлении.",
    avatar: "images/heroes/Holgar.jpg"
  },
  {
    name: "Клатир",
    tagline: "Не раз спасший Страж и не раз спасенный собрат",
    role: "Страж-отступник",
    bio: "Клатир - именно тот, кто дважды спасал Леграда, именно тот, кого Леград спасал трижды, и тот, кому главный герой обязан многими знаниями об истинном устройстве Империи. Вспыльчив, но справедлив и добр. Помогает восстановить великий Орден Небесного Меча.",
    avatar: "images/heroes/Klatir.png"
  },
  {
    name: "Ксилим",
    tagline: "Управитель Ордена Небесного Меча второго Пояса",
    role: "Учитель Академии",
    bio: "Поначалу жесткий и требовательный, но позже проникнувшийся к Леграду симпатией, сейчас верный соратник и тот, кому можно доверить Академию Ордена во втором Поясе.",
    avatar: "images/heroes/Ksilim.jpg"
  },
  {
    name: "Тола",
    tagline: "Бывший соученик Леграда, теперь же верный друг и помощник",
    role: "Ученик",
    bio: "Студент старшего курса Академии, потерявший любимую из-за катастрофы, устроенной неизвестными и взятый в плен на долгие два года. Нашел новый смысл жизни благодаря Леграду, который помог ему отомстить убийцам и разрушителям прошлой жизни.",
    avatar: "images/heroes/Tola.png"
  }
];

const grid = document.getElementById("heroesGrid");
const modal = document.getElementById("heroModal");

function initial(name) {
  return (name.trim()[0] || "?").toUpperCase();
}

function portraitMarkup(hero, className) {
  const container = document.createElement("div");
  container.className = className;

  if (!hero.avatar) {
    container.classList.add("portrait-fallback");
    container.textContent = initial(hero.name);
    return container;
  }

  const img = document.createElement("img");
  img.src = hero.avatar;
  img.alt = "Портрет персонажа " + hero.name;
  img.loading = "lazy";

  const fallback = document.createElement("span");
  fallback.className = "portrait-fallback-letter";
  fallback.textContent = initial(hero.name);
  fallback.style.display = "none";

  img.addEventListener("error", function () {
    img.style.display = "none";
    fallback.style.display = "flex";
  });

  container.appendChild(img);
  container.appendChild(fallback);

  return container;
}

function setPortrait(element, hero) {
  element.innerHTML = "";
  element.className = "hm-portrait";

  if (!hero.avatar) { element.style.display = "none"; return; }

  element.style.display = "";

  const img = document.createElement("img");

  img.src = hero.avatar;
  img.alt = "Портрет персонажа " + hero.name;
  img.addEventListener("error", function () { element.style.display = "none"; });

  element.appendChild(img);
}

const heroCards = [];

heroes.forEach(function (hero) {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");

  const portrait = portraitMarkup(hero, "hero-avatar");
  const name = document.createElement("h3");
  name.textContent = hero.name;
  const role = document.createElement("span");
  role.className = "hero-role";
  role.textContent = hero.role;
  const tagline = document.createElement("p");
  tagline.className = "hero-tagline";
  tagline.textContent = hero.tagline;

  card.appendChild(portrait);
  card.appendChild(name);
  card.appendChild(role);
  card.appendChild(tagline);

  const open = function () { openModal(hero); };
  card.addEventListener("click", open);
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  grid.appendChild(card);
  heroCards.push(card);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (entry.target.dataset.delay || '0') + 'ms';
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

heroCards.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 70;
  io.observe(el);
});

function openModal(hero) {
  document.getElementById("hmRole").textContent = hero.role;
  document.getElementById("hmName").textContent = hero.name;
  document.getElementById("hmBio").textContent = hero.bio;

  setPortrait(
    document.getElementById("hmPortrait"),
    hero
  );

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modal.addEventListener("click", function (event) {
  if (event.target.dataset.close !== undefined) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});