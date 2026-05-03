const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const emblem = document.querySelector('.emblem-img');
if (emblem && window.matchMedia('(min-width: 1024px)').matches) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    emblem.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// === i18n ===
const i18n = {
  jp: {
    'hero-lead': 'Where strategy meets chance, and minds meet across the table.\n      麻雀・ポーカーを核とし、<em>盤上のあらゆる遊戯</em>を通じて研究科を越えた邂逅を育む、JAIST 大学院公認のアナログゲームサークル。',
    'about-p1': 'JAIST Analog Game Club は、北陸先端科学技術大学院大学に集う大学院生のための公認サークルです。麻雀・ポーカーを中心に、ボードゲーム・チェス・TRPG など、卓を囲んで遊ぶあらゆるアナログゲームを楽しんでいます。',
    'about-p2': '勝敗は問題ではありません。<em>一手の判断</em>、<em>場の読み</em>、そして<em>対面で交わされる対話</em>。これらは研究という営みにも通じる「考える愉しみ」の延長線上にあります。専攻の垣根を越え、初心者から経験者まで、丁寧に教え合いながら一緒に上達していく雰囲気を大切にしています。',
    'about-p3': '部員持ち寄りのボードゲームや新作体験会も随時開催。研究の合間の数時間、画面から離れて、もう一つの<em>知の遊戯</em>に身を委ねてみませんか。',
    'game-desc-1': 'テキサス・ホールデムを軸に開催。チップを使った本格的なトーナメント形式から、カジュアルなキャッシュゲームまで。読み合いと確率の世界へ。',
    'game-desc-2': 'リーチ麻雀（日本麻雀）を基本に、初心者卓と経験者卓を分けて開催。点数計算の勉強会も実施し、ゼロから始められる環境を整えています。',
    'game-desc-3': 'D&D、クトゥルフ神話TRPG、ソードワールドなど。20面ダイスと想像力で物語を紡ぐセッションを定期的に開催しています。',
    'game-desc-4': '古来より続く頭脳戦の極致。希望者を募って静かに盤に向かう時間も大切に。研究室から少し離れて、一手に集中する贅沢を。',
    'game-desc-5': '部員持ち寄りで多彩なタイトルを楽しむ。Catan, Carcassonne, Splendor, Dominion など定番から最新のドイツゲーム賞受賞作まで。',
    'game-desc-6': '話題の新作ボードゲームをみんなで初プレイする月例企画。ルール解説から含めて、誰もが対等に楽しめる時間を共有します。',
    'sched-time-3': '月 1 回 / 不定期',
    'sched-time-4': '部室開放時',
    'sched-desc-1': '毎週火曜は麻雀卓を中心に開催。初心者向けレクチャーも随時実施しています。',
    'sched-desc-2': 'ポーカートーナメントとボードゲームを並行開催。週末前のリラックスタイム。',
    'sched-desc-3': '月例の麻雀大会、年 2 回のポーカートーナメント、夏冬の合宿を企画。',
    'sched-desc-4': '部室は基本的に開放されています。空きコマに立ち寄って一局、というのも歓迎。',
    'join-text': '経験の有無は問いません。麻雀牌に触れたことがない方も、ポーカーをやってみたい方も、まずは見学からどうぞ。所属研究科は問わず、JAIST に在籍する大学院生であればどなたでも歓迎します。',
    'join-eligibility': 'JAIST に在籍する<br>大学院生',
    'join-fee-note': '消耗品・新規ボードゲーム購入費',
    'footer-text': 'Japan Advanced Institute of Science and Technology Analog Game Club.\n        北陸先端科学技術大学院大学 公認アナログゲームサークル。',
    'cal-sub': '— スケジュールを確認',
    'legend-mahjong': '麻雀ナイト',
    'legend-poker': 'ポーカー & ボード',
    'legend-board': '新作体験会',
    'legend-tournament': '大会 / トーナメント',
    'game-jp-1': 'ポーカー',
    'game-jp-2': '麻雀',
    'game-jp-3': 'テーブルトーク RPG',
    'game-jp-4': 'チェス・将棋・囲碁',
    'game-jp-5': 'ボードゲーム',
    'game-jp-6': '新作体験会',
  },
  en: {
    'hero-lead': 'Where strategy meets chance, and minds meet across the table. Centered around mahjong and poker, we foster connections across research fields through <em>every game played at the table</em> — the official analog game club of JAIST Graduate School.',
    'about-p1': 'JAIST Analog Game Club is an officially recognized club for graduate students at the Japan Advanced Institute of Science and Technology. Centered around mahjong and poker, we enjoy all kinds of analog games played around a table — board games, chess, TRPG, and more.',
    'about-p2': 'Winning or losing is beside the point. <em>A decisive move</em>, <em>reading the room</em>, <em>face-to-face dialogue</em> — these are extensions of the same joy of thinking that drives research itself. We cherish an atmosphere where beginners and veterans alike help each other grow, across all fields of study.',
    'about-p3': 'Member-contributed board game sessions and new-release events are held regularly. Between research sessions, why not step away from the screen and immerse yourself in another form of <em>intellectual play</em>?',
    'game-desc-1': "Centered on Texas Hold'em, from full tournament formats with chips to casual cash games. Step into the world of probability and reading your opponents.",
    'game-desc-2': 'Played in riichi mahjong (Japanese rules), with separate tables for beginners and experienced players. Score-calculation study sessions ensure everyone can start from zero.',
    'game-desc-3': 'D&D, Call of Cthulhu, Sword World, and more. Regular sessions where twenty-sided dice and imagination weave stories together.',
    'game-desc-4': 'The pinnacle of strategic thinking, refined over centuries. Quiet sessions for those who wish to gather around the board. Step away from the lab and indulge in the luxury of pure focus.',
    'game-desc-5': 'A diverse selection brought in by members. From classics like Catan, Carcassonne, Splendor, and Dominion to the latest Spiel des Jahres award winners.',
    'game-desc-6': 'A monthly event where everyone plays a new board game for the first time together. Rules explanation included — a shared experience where everyone starts on equal footing.',
    'sched-time-3': 'Once a month / irregular',
    'sched-time-4': 'When the room is open',
    'sched-desc-1': 'Every Tuesday, centered around mahjong. Beginner lectures held as needed.',
    'sched-desc-2': 'Poker tournaments and board games run in parallel — a perfect wind-down before the weekend.',
    'sched-desc-3': 'Monthly mahjong tournaments, two poker tournaments per year, and summer/winter retreats.',
    'sched-desc-4': 'The club room is generally open. Drop by during a free period for a quick game — always welcome.',
    'join-text': 'No experience required. Whether you have never touched a mahjong tile or just want to try poker, feel free to come and observe first. All graduate students enrolled at JAIST are welcome, regardless of research department.',
    'join-eligibility': 'Graduate students<br>enrolled at JAIST',
    'join-fee-note': 'For consumables & new board game purchases',
    'footer-text': 'Japan Advanced Institute of Science and Technology Analog Game Club.\n        The official analog game club of JAIST.',
    'cal-sub': '— plan your visit',
    'legend-mahjong': 'Mahjong Night',
    'legend-poker': 'Poker & Boards',
    'legend-board': 'New Release',
    'legend-tournament': 'Tournament',
    'game-jp-1': 'Texas Hold\'em',
    'game-jp-2': 'Riichi Mahjong',
    'game-jp-3': 'Tabletop Role-Playing Game',
    'game-jp-4': 'Chess, Shogi & Go',
    'game-jp-5': 'Modern Board Games',
    'game-jp-6': 'New Release Event',
  },
};

let currentLang = 'jp';

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

// === Calendar ===
const GC_API_KEY = 'AIzaSyBM4G5I8pjJ-4q8kvW7ZIluMHRji3_JaGg';
const GC_CAL_ID = '0cb20c3a9f1799ab651e9456b20829673f0bf65248cd49ee2b83d432a9bf82e3@group.calendar.google.com';

const calMonthNames = {
  jp: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
};
const calDayNames = {
  jp: ['日','月','火','水','木','金','土'],
  en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
};

function getEventType(title) {
  const t = (title || '').toLowerCase();
  if (t.includes('麻雀') || t.includes('mahjong')) return 'mahjong';
  if (t.includes('ポーカー') || t.includes('poker')) return 'poker';
  if (t.includes('大会') || t.includes('tournament')) return 'tournament';
  return 'board';
}

async function fetchCalendarEvents(year, month) {
  const timeMin = new Date(year, month, 1).toISOString();
  const timeMax = new Date(year, month + 1, 0, 23, 59, 59).toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GC_CAL_ID)}/events?key=${GC_API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Calendar API error: ${res.status}`);
  const data = await res.json();
  return data.items || [];
}

let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();

async function renderCalendar() {
  const lang = currentLang;
  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calMonthLabel');
  if (!grid) return;

  if (label) {
    label.textContent = lang === 'jp'
      ? `${calYear}年 ${calMonthNames.jp[calMonth]}`
      : `${calMonthNames.en[calMonth]} ${calYear}`;
  }

  grid.innerHTML = '<div class="cal-loading">— loading —</div>';

  let gcEvents = [];
  try {
    gcEvents = await fetchCalendarEvents(calYear, calMonth);
  } catch (e) {
    console.error(e);
    grid.innerHTML = '<div class="cal-loading">イベントの取得に失敗しました</div>';
    return;
  }

  const eventMap = {};
  gcEvents.forEach(ev => {
    const dateStr = ev.start.date || (ev.start.dateTime || '').slice(0, 10);
    if (!dateStr) return;
    if (!eventMap[dateStr]) eventMap[dateStr] = [];
    eventMap[dateStr].push(ev.summary || '');
  });

  grid.innerHTML = '';

  calDayNames[lang].forEach(name => {
    const h = document.createElement('div');
    h.className = 'cal-day-header';
    h.textContent = name;
    grid.appendChild(h);
  });

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDay; i++) {
    const e = document.createElement('div');
    e.className = 'cal-day empty';
    grid.appendChild(e);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dow = new Date(calYear, calMonth, d).getDay();
    const isToday = calYear === today.getFullYear() && calMonth === today.getMonth() && d === today.getDate();
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const titles = eventMap[dateStr] || [];

    const cell = document.createElement('div');
    const cls = ['cal-day'];
    if (isToday) cls.push('today');
    if (dow === 0) cls.push('sunday');
    if (dow === 6) cls.push('saturday');
    if (titles.length) cls.push('has-event');
    cell.className = cls.join(' ');

    const num = document.createElement('div');
    num.className = 'cal-day-num';
    num.textContent = d;
    cell.appendChild(num);

    titles.forEach(title => {
      const el = document.createElement('div');
      el.className = `cal-event type-${getEventType(title)}`;
      el.textContent = title;
      cell.appendChild(el);
    });

    grid.appendChild(cell);
  }
}

document.getElementById('calPrev').addEventListener('click', () => {
  if (--calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
document.getElementById('calNext').addEventListener('click', () => {
  if (++calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

const _origSwitchLang = switchLang;
switchLang = lang => { _origSwitchLang(lang); renderCalendar(); };

renderCalendar();
