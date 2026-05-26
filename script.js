// === Hamburger menu ===
const hamburger = document.querySelector('.nav-hamburger');
const navEl = document.querySelector('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  // リンクをクリックしたら閉じる
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      navEl.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

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
    'game-desc-3': '資源を集め、道を延ばし、街を築く。交渉と開拓の名作ボードゲーム。初心者でもすぐに楽しめるルールで、毎回異なる盤面が展開される。',
    'game-desc-4': '日本の定番カードゲーム。手札を早く出し切った者が大富豪。地域ルールや革命など、みんなで合意したローカルルールで盛り上がれる。',
    'game-desc-5': 'タイルを置いて中世の街を作り上げるタイル配置ゲーム。シンプルなルールの中に深い駆け引きが宿る、世界的名作。',
    'game-desc-6': '宝石を集めてカードを購入し、貴族の訪問を狙う宝石商ゲーム。ルールは簡単、でも戦略は深い。短時間で遊べる人気作。',
    'game-desc-7': '就職・結婚・引越し…人生の岐路をルーレットで進む国民的ボードゲーム。笑いと意外性で場が盛り上がる、みんな知っている定番。',
    'game-desc-8': '白と黒の石を挟んでひっくり返す、シンプルで奥深い2人用ゲーム。終盤の逆転劇が醍醐味。手軽に一局楽しめる頭脳戦の定番。',
    'game-desc-9': '話題の新作ボードゲームをみんなで初プレイする月例企画。ルール解説から含めて、誰もが対等に楽しめる時間を共有します。',
    'sched-time-3': '月 1 回 / 不定期',
    'sched-time-4': '部室開放時',
    'sched-time-1': '火・金 / 18:00 — 22:00',
    'sched-desc-1': '部が所有するゲームや部員が持ち寄ったゲームをみんなで楽しむ週例活動。その日集まったメンバーで何を遊ぶか決めるのも醍醐味。',
    'sched-desc-3': '月例の麻雀大会、年 2 回のポーカートーナメント、夏冬の合宿を企画。',
    'sched-desc-4': '部室は基本的に開放されています。空きコマに立ち寄って一局、というのも歓迎。',
    'join-text': '経験の有無は問いません。麻雀牌に触れたことがない方も、ポーカーをやってみたい方も、まずは見学からどうぞ。所属研究科は問わず、JAIST に在籍する大学院生であればどなたでも歓迎します。',
    'join-eligibility': 'JAIST に在籍する<br>大学院生',
    'join-fee-note': ' × 年2回（5月・11月）',
    'footer-text': 'Japan Advanced Institute of Science and Technology Analog Game Club.\n        北陸先端科学技術大学院大学 公認アナログゲームサークル。',
    'cal-sub': '— スケジュールを確認',
    'legend-mahjong': '麻雀ナイト',
    'legend-poker': 'ポーカー & ボード',
    'legend-board': '新作体験会',
    'legend-tournament': '大会 / トーナメント',
    'join-btn': '入部希望届を提出する',
    'game-jp-1': 'ポーカー',
    'game-jp-2': '麻雀',
    'game-jp-3': 'カタン',
    'game-jp-4': '大富豪',
    'game-jp-5': 'カルカソンヌ',
    'game-jp-6': 'スプレンダー',
    'game-jp-7': '人生ゲーム',
    'game-jp-8': 'リバーシ',
    'game-jp-9': '新作体験会',
  },
  en: {
    'hero-lead': 'Where strategy meets chance, and minds meet across the table. Centered around mahjong and poker, we foster connections across research fields through <em>every game played at the table</em> — the official analog game club of JAIST Graduate School.',
    'about-p1': 'JAIST Analog Game Club is an officially recognized club for graduate students at the Japan Advanced Institute of Science and Technology. Centered around mahjong and poker, we enjoy all kinds of analog games played around a table — board games, chess, TRPG, and more.',
    'about-p2': 'Winning or losing is beside the point. <em>A decisive move</em>, <em>reading the room</em>, <em>face-to-face dialogue</em> — these are extensions of the same joy of thinking that drives research itself. We cherish an atmosphere where beginners and veterans alike help each other grow, across all fields of study.',
    'about-p3': 'Member-contributed board game sessions and new-release events are held regularly. Between research sessions, why not step away from the screen and immerse yourself in another form of <em>intellectual play</em>?',
    'game-desc-1': "Centered on Texas Hold'em, from full tournament formats with chips to casual cash games. Step into the world of probability and reading your opponents.",
    'game-desc-2': 'Played in riichi mahjong (Japanese rules), with separate tables for beginners and experienced players. Score-calculation study sessions ensure everyone can start from zero.',
    'game-desc-3': 'Gather resources, build roads, and settle the island. A landmark negotiation and strategy game that plays differently every time — easy to learn, hard to master.',
    'game-desc-4': 'Japan\'s classic card game. Be the first to empty your hand and claim the title of "Millionaire." House rules and local variants keep every round fresh and lively.',
    'game-desc-5': 'Place tiles to build a medieval landscape and claim cities, roads, and farms. Simple rules hide deep tactical choices in this worldwide classic.',
    'game-desc-6': 'Collect gems, purchase cards, and attract nobles in this elegant engine-building game. Quick to learn, surprisingly deep — a perfect session game.',
    'game-desc-7': 'Spin the wheel and navigate life\'s milestones — jobs, marriage, kids, and retirement. A beloved classic that always draws laughs and surprises.',
    'game-desc-8': 'Flip your opponent\'s pieces by sandwiching them in this timeless two-player abstract game. Simple to pick up, with satisfying last-minute reversals.',
    'game-desc-9': 'A monthly event where everyone plays a new board game for the first time together. Rules explanation included — a shared experience where everyone starts on equal footing.',
    'sched-time-3': 'Once a month / irregular',
    'sched-time-4': 'When the room is open',
    'sched-time-1': 'Tue & Fri / 18:00 — 22:00',
    'sched-desc-1': 'Our weekly gathering where everyone plays whatever sounds fun — club-owned games, member-brought titles, anything goes. The lineup is decided on the spot.',
    'sched-desc-3': 'Monthly mahjong tournaments, two poker tournaments per year, and summer/winter retreats.',
    'sched-desc-4': 'The club room is generally open. Drop by during a free period for a quick game — always welcome.',
    'join-text': 'No experience required. Whether you have never touched a mahjong tile or just want to try poker, feel free to come and observe first. All graduate students enrolled at JAIST are welcome, regardless of research department.',
    'join-eligibility': 'Graduate students<br>enrolled at JAIST',
    'join-fee-note': ' × twice a year (May & Nov)',
    'footer-text': 'Japan Advanced Institute of Science and Technology Analog Game Club.\n        The official analog game club of JAIST.',
    'cal-sub': '— plan your visit',
    'legend-mahjong': 'Mahjong Night',
    'legend-poker': 'Poker & Boards',
    'legend-board': 'New Release',
    'legend-tournament': 'Tournament',
    'join-btn': 'Apply for Membership',
    'game-jp-1': 'Texas Hold\'em',
    'game-jp-2': 'Riichi Mahjong',
    'game-jp-3': 'Catan',
    'game-jp-4': 'Daifugō',
    'game-jp-5': 'Carcassonne',
    'game-jp-6': 'Splendor',
    'game-jp-7': 'Game of Life',
    'game-jp-8': 'Reversi',
    'game-jp-9': 'New Release Event',
  },
};

let currentLang = 'jp';

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
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

// ページ読み込み時に保存済みの言語を復元
const savedLang = localStorage.getItem('lang');
if (savedLang && savedLang !== 'jp') switchLang(savedLang);

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
