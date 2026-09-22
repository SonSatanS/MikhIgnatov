const log = document.getElementById('chatLog');
const form = document.getElementById('chatForm');
const input = document.getElementById('chatText');

function time() {
    const d = new Date();
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}
function esc(s) {
    return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function addMessage(text, who) {
    const el = document.createElement('div');
    el.className = 'msg ' + who;
    el.innerHTML = `${esc(text)}<span class="time">${time()}</span>`;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
}

function showTyping() {
    const el = document.createElement('div');
    el.className = 'msg author typing';
    el.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
}

addMessage('Здравствуйте! Рад, что вы читаете мои книги. Спрашивайте — отвечу, когда буду за компьютером.', 'author');

const replies = [
    'Спасибо за сообщение!',
    'Интересный вопрос',
    'Рад, что зацепило',
    'Ваш отзыв вдохновляет продолжать цикл «Путь».'
];
function getAuthorReply(text) {
    return new Promise(resolve => {
        const reply = replies[Math.floor(Math.random() * replies.length)];
        setTimeout(() => resolve(reply), 900 + Math.random() * 800);
    });
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    input.style.height = 'auto';

    const typing = showTyping();
    const reply = await getAuthorReply(text);
    typing.remove();
    addMessage(reply, 'author');
});

input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
});
input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
});
