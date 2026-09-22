const svg = document.getElementById('map');
const world = document.getElementById('world');
const biomesG = document.getElementById('biomes');
const markersG = document.getElementById('markers');
const stage = document.getElementById('mapStage');

const CATEGORIES = {
    city: { label: 'Города', color: '#8a3b2e' },
    village: { label: 'Деревни', color: '#b8852b' },
    place: { label: 'Важные места', color: '#2f6b5e' },
    landscape: { label: 'Ландшафт', color: '#5a7d5a' }
};

const PLACES = [
    { name: 'Миражный. Город Древних', type: 'city', x: 696, y: 560, desc: 'Разрушенный, но все еще чарующе прекрасный, полный искусных и хитроумных ловушек город Древних, населенный духовными Зверями.' },
    { name: 'Школа Морозной Гряды', type: 'place', x: 877, y: 436, desc: 'Жестокое и холодное место, обучающее молодых талантов и принимающая в свои ряды послушников.' },
    { name: 'Врата Древних', type: 'place', x: 645, y: 405, desc: 'Сеть порталов - утерянная технология, сейчас почти полностью разрушенная или заблокированная для ныне живущих, позволявшая Древним перемещаться между и внутри поясов. Клан Вилор и Император имеют полный доступ к функционалу.' },
    { name: 'Морозная гряда', type: 'landscape', x: 855, y: 405, desc: 'Северные горы, покрытые льдом, полные опасностей и Монстров.' },
    { name: 'Пустошь нулевого', type: 'landscape', x: 770, y: 530, desc: 'Родина Леграда. Бывший столичный круг, где раньше жили самые высшие сословия Древних. Был выжжен сектантским указов Смерти в великой войне Империи и Тысячи сект, после чего изолирован от основной части Империи и назван тюремным. Из-за скудности силы Неба сюда ссылают преступников, провинившихся стражей и другое отребье.' },
    { name: 'Руины Древних', type: 'place', x: 830, y: 470, desc: 'Руины строений непонятного назначения - разрушенные антрацитово-черные здания огромных размеров' },
    { name: 'Крепость Императора', type: 'place', x: 1030, y: 416, desc: 'Дворец, где восседает правитель Империи - Рам Вилор' },
    { name: 'Секта Перевернутого Неба', type: 'place', x: 733, y: 879, desc: 'Секта Тритонов, бывшая секта Синих Тритонов, объединившая под своей рукой все соседние секты и переименнованная в Перевернутое небо для возможности торговать с Орденом Небесного меча' }
];

const BIOMES = {
    ridge: { x0: 815, x1: 835, y: 400, count: 3 },
    desert: { x0: 770, x1: 830, y: 490, rows: 2 },
    forest: { cx: 731, cy: 583, r: 14, count: 8 }
};

const RINGS = {
    cx: 800, cy: 500,
    width: 70,
    count: 6,
    fade: 150,
    stroke: '#b89a5a',
    showLabels: true,
    labels: ['Нулевой круг', 'Первый пояс', 'Второй пояс', 'Третий пояс',
        'Четвёртый пояс', 'Пятый пояс', 'Шестой пояс/Земли Итреи'],
    fills: ['#f6f0e0', '#eddfbb', '#ead9b0', '#e6d2a0', '#eddfbb', '#f4eedb', '#f6f0e0']
};

const NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
}

function drawRings() {
    const R = RINGS, ringsG = document.getElementById('rings');
    ringsG.innerHTML = '';
    const W = R.width, n = R.count;
    const outerFade = n * W + R.fade;

    const defs = svg.querySelector('defs');
    const old = document.getElementById('ring6Fade'); if (old) old.remove();
    const grad = el('radialGradient', {
        id: 'ring6Fade', gradientUnits: 'userSpaceOnUse',
        cx: R.cx, cy: R.cy, r: outerFade
    });
    const solid = (n * W) / outerFade;
    grad.appendChild(el('stop', { offset: 0, 'stop-color': R.fills[n] }));
    grad.appendChild(el('stop', { offset: solid, 'stop-color': R.fills[n] }));
    grad.appendChild(el('stop', { offset: 1, 'stop-color': R.fills[n], 'stop-opacity': 0 }));
    defs.appendChild(grad);

    ringsG.appendChild(el('circle', { cx: R.cx, cy: R.cy, r: outerFade, fill: 'url(#ring6Fade)' }));

    for (let j = n; j >= 1; j--) {
        const c = el('circle', {
            cx: R.cx, cy: R.cy, r: j * W,
            fill: R.fills[j - 1],
            stroke: R.stroke, 'stroke-width': 1.5, 'stroke-opacity': .55
        });
        if (j === n) c.setAttribute('filter', 'url(#soft)');
        ringsG.appendChild(c);
    }

    if (R.showLabels) R.labels.forEach((txt, i) => {
        if (!txt) return;
        const t = el('text', {
            x: R.cx, y: R.cy - (i + 0.5) * W,
            class: 'ring-label', 'text-anchor': 'middle'
        });
        t.textContent = txt;
        ringsG.appendChild(t);
    });
}
drawRings();

(function drawBiomes() {
    const r = BIOMES.ridge;
    for (let i = 0; i < r.count; i++) {
        const x = r.x0 + (r.x1 - r.x0) * (i / (r.count - 1)) + (Math.random() - .5) * 6;
        const h = 15 + Math.random() * 15;
        const w = 10 + Math.random() * 8;
        const base = r.y + (Math.random() - .5) * 8;
        biomesG.appendChild(el('path', {
            d: `M${x - w},${base} L${x},${base - h} L${x + w},${base} Z`,
            fill: '#d7dde2', stroke: '#9aa7b2', 'stroke-width': 2, 'stroke-linejoin': 'round'
        }));
        biomesG.appendChild(el('path', {
            d: `M${x - w * .32},${base - h * .55} L${x},${base - h} L${x + w * .32},${base - h * .55} L${x + 8},${base - h * .42} L${x},${base - h * .6} L${x - 8},${base - h * .42} Z`,
            fill: '#ffffff'
        }));
    }
    const d = BIOMES.desert;
    for (let row = 0; row < d.rows; row++) {
        const y = d.y + row * 20;
        let path = `M${d.x0},${y}`;
        for (let x = d.x0; x <= d.x1; x += 30) path += ` q15,-10 30,0`;
        biomesG.appendChild(el('path', { d: path, fill: 'none', stroke: '#cdb074', 'stroke-width': 3, opacity: .8 }));
    }
    const f = BIOMES.forest;
    for (let i = 0; i < f.count; i++) {
        const a = Math.random() * Math.PI * 2, rr = Math.random() * f.r;
        const x = f.cx + Math.cos(a) * rr, y = f.cy + Math.sin(a) * rr * .8;
        const s = 8 + Math.random() * 4;
        biomesG.appendChild(el('rect', { x: x - 1.5, y: y, width: 3, height: s * .6, fill: '#7a5a36' }));
        biomesG.appendChild(el('path', {
            d: `M${x},${y - s} L${x - s * .7},${y + 2} L${x + s * .7},${y + 2} Z`,
            fill: i % 2 ? '#5a7d5a' : '#4d6e4d'
        }));
    }
})();

const pinScales = [];

function glyph(type) {
    switch (type) {
        case 'city': return `<rect x="-6" y="-39" width="12" height="14" rx="1" fill="#fff"/>`;
        case 'village': return `<path d="M-7,-30 L0,-40 L7,-30 Z" fill="#fff"/><rect x="-5" y="-31" width="10" height="7" fill="#fff"/>`;
        case 'place': return `<path d="M0,-42 L2.4,-34 L10,-32 L2.4,-30 L0,-22 L-2.4,-30 L-10,-32 L-2.4,-34 Z" fill="#fff"/>`;
        case 'landscape': return `<path d="M-9,-26 L-2,-38 L1.5,-32 L4.5,-40 L9,-26 Z" fill="#fff"/>`;
    }
    return '';
}

function drawMarkers() {
    markersG.innerHTML = '';
    pinScales.length = 0;
    PLACES.forEach(p => {
        const color = (CATEGORIES[p.type] || {}).color || '#2f6b5e';
        const g = el('g', {
            class: 'place', 'data-type': p.type, tabindex: 0, role: 'button',
            'aria-label': p.name
        });
        const pos = el('g', { transform: `translate(${p.x},${p.y})` });
        const scale = el('g', {});
        scale.innerHTML = `
            <circle class="hit" cx="0" cy="-30" r="30"></circle>
            <g class="pin-body">
                <path d="M0,0 C-7,-14 -16,-20 -16,-32 a16,16 0 1,1 32,0 C16,-20 7,-14 0,0 Z"
                      fill="${color}" stroke="#fff" stroke-width="2"/>
                ${glyph(p.type)}
                <text class="pin-label" x="0" y="-54" text-anchor="middle">${p.name}</text>
            </g>`;
        pos.appendChild(scale);
        g.appendChild(pos);

        const open = () => openInfo(p, g);
        g.addEventListener('pointerdown', e => e.stopPropagation());
        g.addEventListener('pointermove', e => e.stopPropagation());
        g.addEventListener('pointerup', e => e.stopPropagation());
        g.addEventListener('click', e => { e.stopPropagation(); open(); });
        g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

        markersG.appendChild(g);
        pinScales.push(scale);
    });
}
drawMarkers();

const MIN = 0.7, MAX = 4;
const state = { scale: 1, x: 0, y: 0 };

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

function apply() {
    world.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
    const inv = 1 / state.scale;
    pinScales.forEach(g => g.setAttribute('transform', `scale(${inv})`));
}

function clientToVB(cx, cy) {
    const pt = svg.createSVGPoint();
    pt.x = cx; pt.y = cy;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function zoomAt(factor, cx, cy) {
    const vb = clientToVB(cx, cy);
    const ns = clamp(state.scale * factor, MIN, MAX);
    state.x = vb.x - (vb.x - state.x) * (ns / state.scale);
    state.y = vb.y - (vb.y - state.y) * (ns / state.scale);
    state.scale = ns;
    apply();
}

svg.addEventListener('wheel', e => {
    e.preventDefault();
    world.classList.remove('smooth');
    zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX, e.clientY);
}, { passive: false });

let dragging = false, vbStart = null, startState = null, justDragged = false, moveDist = 0;
svg.addEventListener('pointerdown', e => {
    dragging = true; justDragged = false; moveDist = 0;
    vbStart = clientToVB(e.clientX, e.clientY);
    startState = { x: state.x, y: state.y };
    world.classList.remove('smooth');
    svg.classList.add('grabbing');
    svg.setPointerCapture(e.pointerId);
});
svg.addEventListener('pointermove', e => {
    if (!dragging) return;
    const vb = clientToVB(e.clientX, e.clientY);
    state.x = startState.x + (vb.x - vbStart.x);
    state.y = startState.y + (vb.y - vbStart.y);
    moveDist += Math.abs(vb.x - vbStart.x) + Math.abs(vb.y - vbStart.y);
    if (moveDist > 6) justDragged = true;
    apply();
});
function endDrag() {
    dragging = false;
    svg.classList.remove('grabbing');
    setTimeout(() => justDragged = false, 0);
}
svg.addEventListener('pointerup', endDrag);
svg.addEventListener('pointercancel', endDrag);

function centerClient() {
    const r = stage.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}
document.getElementById('zoomIn').onclick = () => { world.classList.add('smooth'); const c = centerClient(); zoomAt(1.3, c.x, c.y); };
document.getElementById('zoomOut').onclick = () => { world.classList.add('smooth'); const c = centerClient(); zoomAt(1 / 1.3, c.x, c.y); };
document.getElementById('zoomReset').onclick = () => {
    world.classList.add('smooth');
    state.scale = 1; state.x = 0; state.y = 0; apply();
};

apply();

const legend = document.getElementById('mapLegend');
const shown = {};
Object.keys(CATEGORIES).forEach(type => {
    shown[type] = true;
    const c = CATEGORIES[type];
    const btn = document.createElement('button');
    btn.className = 'legend-item';
    btn.innerHTML = `<span class="legend-swatch" style="background:${c.color}"></span>${c.label}`;
    btn.onclick = () => {
        shown[type] = !shown[type];
        btn.classList.toggle('off', !shown[type]);
        markersG.querySelectorAll(`.place[data-type="${type}"]`)
            .forEach(m => m.classList.toggle('dimmed', !shown[type]));
    };
    legend.appendChild(btn);
});

const info = document.getElementById('mapInfo');
const infoEmpty = document.getElementById('mapInfoEmpty');
const infoType = document.getElementById('mapInfoType');
const infoName = document.getElementById('mapInfoName');
const infoDesc = document.getElementById('mapInfoDesc');

function openInfo(p, g) {
    markersG.querySelectorAll('.place.active').forEach(m => m.classList.remove('active'));
    g.classList.add('active');
    const c = CATEGORIES[p.type] || {};
    infoType.textContent = c.label || '';
    infoType.style.background = c.color || 'var(--verdigris)';
    infoName.textContent = p.name;
    infoDesc.textContent = p.desc;
    info.hidden = false;
    infoEmpty.hidden = true;
}
document.getElementById('mapInfoClose').onclick = () => {
    info.hidden = true;
    infoEmpty.hidden = false;
    markersG.querySelectorAll('.place.active').forEach(m => m.classList.remove('active'));
};

(function spoilerGate() {
    const KEY = 'putMapSpoilerAck';
    const modal = document.getElementById('spoilerModal');
    const mainEl = document.querySelector('main');
    const confirmBtn = document.getElementById('spoilerConfirm');
    if (!modal || !confirmBtn) return;
    let alreadySeen = false;
    try { alreadySeen = localStorage.getItem(KEY) === '1'; } catch (e) { }
    if (alreadySeen) return;
    modal.hidden = false;
    mainEl.classList.add('blurred');
    confirmBtn.addEventListener('click', () => {
        modal.hidden = true;
        mainEl.classList.remove('blurred');
        try { localStorage.setItem(KEY, '1'); } catch (e) { }
    });
})();
