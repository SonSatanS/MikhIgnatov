const heroes = [
  {
    name: "Леград", tagline: "Собиратель камней из Нулевого", role: "Главный герой",
    bio: "Фанат боя на грани, безумств и безрассудств, господин верных, жаждущих мести и отчаявшихся, дающий надежду, веру и возможности, меняющий лица и личности, верящий в добродетели, причиняющий справедливость, лекарь душ, боевой мастер указов, талант копья, все это - наш с вами любимый главный герой  ", avatar: ""
  },
  {
    name: "Аранви", tagline: "Клинок Семи ночей", role: "Наставник",
    bio: "Верный соратник и близкий друг главного героя, ставший отправной точкой восстановления Ордена Небесного Меча", avatar: ""
  },
  {
    name: "Пересмешник", tagline: "Невидимый, неощутимый и смертельно опасный ", role: "Телохранитель",
    bio: "Незримый убийца, нашедший в Леграде возможность отомстить за любимую и детей клану Эрзум, но получивший гораздо большее, чем просто месть.  ", avatar: ""
  },
  {
    name: "Рам Вилор", tagline: "Император и Небесный воин", role: "???",
    bio: "Величайший из ныне живущих воителей, основатель Империи Сынов Неба и главная фигура в противостоянии сектантам ", avatar: ""
  },
  {
    name: "Райгвар", tagline: "Друг из далекой секты", role: "Наследник секты Тигров",
    bio: "Талант, равный Леграду, боевой мастер указов, умеющий слушать чужую мыслеречь, открытый враг и скрытый друг ", avatar: ""
  },
];

const grid = document.getElementById('heroesGrid');
const modal = document.getElementById('heroModal');

function initial(name) { return (name.trim()[0] || '?').toUpperCase(); }
function bg(url) { return url ? `background-image:url('${url}')` : ''; }

heroes.forEach((h, i) => {
  const card = document.createElement('div');
  card.className = 'hero-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.innerHTML = `
        <div class="hero-avatar" style="${bg(h.avatar)}">${h.avatar ? '' : initial(h.name)}</div>
        <h3>${h.name}</h3>
        <span class="hero-role">${h.role}</span>
        <p class="hero-tagline">${h.tagline}</p>`;
  const open = () => openModal(h);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  grid.appendChild(card);
});

function openModal(h) {
  document.getElementById('hmRole').textContent = h.role;
  document.getElementById('hmName').textContent = h.name;
  document.getElementById('hmBio').textContent = h.bio;
  const p = document.getElementById('hmPortrait');
  p.style.cssText = bg(h.avatar);
  p.textContent = h.avatar ? '' : initial(h.name);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }

modal.addEventListener('click', e => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
