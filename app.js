'use strict';

const I18N = {
  uk: {
    subtitle: 'Архів чатів',
    searchPlaceholder: 'Пошук по фразі або слову…',
    searchAria: 'Пошук по повідомленнях',
    clearSearch: 'Очистити пошук',
    searchModeLabel: 'Шукати:',
    searchModePhrase: 'Фраза',
    searchModeWords: 'Слова',
    searchModeAria: 'Режим пошуку',
    dateLabel: 'Дата сцени',
    allDates: 'Усі дати',
    sortLabel: 'Сортування',
    sortOld: 'Спочатку старі',
    sortNew: 'Спочатку нові',
    sortLong: 'Найдовші',
    sortShort: 'Найкоротші',
    all: 'Усі',
    both: 'Обидва',
    themes: 'Теми',
    themesAria: 'Фільтр за темами',
    characterFilter: 'Фільтр за персонажем',
    loading: 'Завантаження архіву…',
    emptyText: 'Оберіть сцену зі списку або дату, щоб читати чати Северуса й Люціуса.',
    openLatest: 'Відкрити останню сцену',
    tipSearch: '🔍 Пошук по словах',
    tipThemes: '🎭 Фільтри тем',
    tipReply: '↩ Клікабельні цитати',
    back: 'До списку сцен',
    share: 'Скопіювати посилання',
    prevScene: 'Попередня сцена',
    nextScene: 'Наступна сцена',
    themesTitle: 'Теми',
    themesText: 'Оберіть одну або кілька категорій.',
    reset: 'Скинути',
    apply: 'Показати',
    context: 'Контекст відповіді',
    contextShort: 'контекст',
    edited: 'змінено',
    forwarded: 'Переслано від',
    goToMessage: 'Перейти до повідомлення',
    toFirstMatch: 'До першого збігу',
    noMatchHere: 'У цій сцені немає збігів',
    returnToReading: 'Повернутися до місця читання',
    privateWith: 'Приват із',
    reactionPeople: 'Хто поставив',
    reactionUnknown: 'Імена реакцій не збережені в експорті',
    reactionMore: 'і ще {n}',
    reactionShown: 'Експорт зберіг {shown} з {total} імен',
    nothingFound: 'Нічого не знайдено',
    nothingFoundHint: 'Спробуйте інший запит або скиньте фільтри.',
    noScenes: 'Немає сцен за цими фільтрами.',
    noScenesHint: 'Змініть дату, персонажа або теми.',
    copied: 'Посилання скопійовано',
    copyFailed: 'Не вдалося скопіювати посилання',
    updated: 'Оновлено',
    errorTitle: 'Не вдалося завантажити архів',
    errorText: 'Файл chats_data.json не відкрився.',
    errorHint: 'Запустіть локальний сервер (python -m http.server) або відкрийте Snapeverse_Offline.html.',
    close: 'Закрити',
    and: 'і',
    install: 'Встановити застосунок',
    mediaPhoto: '📷 Фото',
    mediaVideo: '🎬 Відео',
    mediaVoice: '🎙️ Голосове',
    mediaAudio: '🎧 Аудіо',
    mediaSticker: '🖼️ Стікер',
    mediaGif: '🎞️ GIF',
    mediaVideoNote: '🎥 Відеоповідомлення',
    mediaFile: '📎 Файл',
    mediaPoll: '📊 Опитування',
    mediaLocation: '📍 Локація',
    mediaContact: '👤 Контакт',
    mediaDice: '🎲 Кубик'
  },
  ru: {
    subtitle: 'Архив чатов',
    searchPlaceholder: 'Поиск по фразе или слову…',
    searchAria: 'Поиск по сообщениям',
    clearSearch: 'Очистить поиск',
    searchModeLabel: 'Искать:',
    searchModePhrase: 'Фраза',
    searchModeWords: 'Слова',
    searchModeAria: 'Режим поиска',
    dateLabel: 'Дата сцены',
    allDates: 'Все даты',
    sortLabel: 'Сортировка',
    sortOld: 'Сначала старые',
    sortNew: 'Сначала новые',
    sortLong: 'Самые длинные',
    sortShort: 'Самые короткие',
    all: 'Все',
    both: 'Оба',
    themes: 'Темы',
    themesAria: 'Фильтр по темам',
    characterFilter: 'Фильтр по персонажу',
    loading: 'Загрузка архива…',
    emptyText: 'Выберите сцену из списка или дату, чтобы читать чаты Северуса и Люциуса.',
    openLatest: 'Открыть последнюю сцену',
    tipSearch: '🔍 Поиск по словам',
    tipThemes: '🎭 Фильтры тем',
    tipReply: '↩ Кликабельные цитаты',
    back: 'К списку сцен',
    share: 'Скопировать ссылку',
    prevScene: 'Предыдущая сцена',
    nextScene: 'Следующая сцена',
    themesTitle: 'Темы',
    themesText: 'Выберите одну или несколько категорий.',
    reset: 'Сбросить',
    apply: 'Показать',
    context: 'Контекст ответа',
    contextShort: 'контекст',
    edited: 'изменено',
    forwarded: 'Переслано от',
    goToMessage: 'Перейти к сообщению',
    toFirstMatch: 'К первому совпадению',
    noMatchHere: 'В этой сцене нет совпадений',
    returnToReading: 'Вернуться к месту чтения',
    privateWith: 'Приват с',
    reactionPeople: 'Кто поставил',
    reactionUnknown: 'Имена реакций не сохранены в экспорте',
    reactionMore: 'и ещё {n}',
    reactionShown: 'Экспорт сохранил {shown} из {total} имён',
    nothingFound: 'Ничего не найдено',
    nothingFoundHint: 'Попробуйте другой запрос или сбросьте фильтры.',
    noScenes: 'Нет сцен по этим фильтрам.',
    noScenesHint: 'Измените дату, персонажа или темы.',
    copied: 'Ссылка скопирована',
    copyFailed: 'Не удалось скопировать ссылку',
    updated: 'Обновлено',
    errorTitle: 'Не удалось загрузить архив',
    errorText: 'Файл chats_data.json не открылся.',
    errorHint: 'Запустите локальный сервер (python -m http.server) или откройте Snapeverse_Offline.html.',
    close: 'Закрыть',
    and: 'и',
    install: 'Установить приложение',
    mediaPhoto: '📷 Фото',
    mediaVideo: '🎬 Видео',
    mediaVoice: '🎙️ Голосовое',
    mediaAudio: '🎧 Аудио',
    mediaSticker: '🖼️ Стикер',
    mediaGif: '🎞️ GIF',
    mediaVideoNote: '🎥 Видеосообщение',
    mediaFile: '📎 Файл',
    mediaPoll: '📊 Опрос',
    mediaLocation: '📍 Локация',
    mediaContact: '👤 Контакт',
    mediaDice: '🎲 Кубик'
  }
};

const FORMS = {
  uk: {
    scene: ['сцена', 'сцени', 'сцен'],
    message: ['повідомлення', 'повідомлення', 'повідомлень'],
    member: ['учасник', 'учасники', 'учасників'],
    match: ['збіг', 'збіги', 'збігів'],
    date: ['дата', 'дати', 'дат']
  },
  ru: {
    scene: ['сцена', 'сцены', 'сцен'],
    message: ['сообщение', 'сообщения', 'сообщений'],
    member: ['участник', 'участника', 'участников'],
    match: ['совпадение', 'совпадения', 'совпадений'],
    date: ['дата', 'даты', 'дат']
  }
};

const MONTHS = {
  uk: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
};

const MEDIA_KEYS = {
  photo: 'mediaPhoto',
  video: 'mediaVideo',
  voice: 'mediaVoice',
  audio: 'mediaAudio',
  sticker: 'mediaSticker',
  gif: 'mediaGif',
  video_note: 'mediaVideoNote',
  file: 'mediaFile',
  poll: 'mediaPoll',
  location: 'mediaLocation',
  contact: 'mediaContact',
  dice: 'mediaDice'
};

const state = {
  lang: loadLang(),
  query: '',
  searchMode: 'phrase',
  character: 'all',
  date: 'all',
  themes: new Set(),
  sort: 'old',
  selectedId: null,
  visible: [],
  tokens: []
};

let DATA = null;
let CHAR = {};
let THEME = {};
let sceneById = new Map();
let pendingThemes = new Set();

const els = {
  body: document.body,
  sidebar: document.getElementById('sidebar'),
  search: document.getElementById('search'),
  searchClear: document.getElementById('search-clear'),
  searchModes: document.getElementById('search-modes'),
  dateSelect: document.getElementById('date-select'),
  sortSelect: document.getElementById('sort-select'),
  quickChars: document.getElementById('quick-chars'),
  themesOpen: document.getElementById('themes-open'),
  themesOpen2: document.getElementById('themes-open-2'),
  themeCount: document.getElementById('theme-count'),
  activeThemes: document.getElementById('active-themes'),
  resultsLabel: document.getElementById('results-label'),
  sceneList: document.getElementById('scene-list'),
  sidebarFoot: document.getElementById('sidebar-foot'),
  chatEmpty: document.getElementById('chat-empty'),
  emptyStats: document.getElementById('empty-stats'),
  openLatest: document.getElementById('open-latest'),
  chatView: document.getElementById('chat-view'),
  chatTitle: document.getElementById('chat-title'),
  chatTime: document.getElementById('chat-time'),
  chatSub: document.getElementById('chat-sub'),
  chatTags: document.getElementById('chat-tags'),
  messages: document.getElementById('messages'),
  matchBar: document.getElementById('match-bar'),
  matchLabel: document.getElementById('match-label'),
  matchJump: document.getElementById('match-jump'),
  backBtn: document.getElementById('back-btn'),
  shareScene: document.getElementById('share-scene'),
  prevScene: document.getElementById('prev-scene'),
  nextScene: document.getElementById('next-scene'),
  loading: document.getElementById('loading'),
  overlay: document.getElementById('themes-overlay'),
  themesClose: document.getElementById('themes-close'),
  themeList: document.getElementById('theme-list'),
  themesReset: document.getElementById('themes-reset'),
  themesApply: document.getElementById('themes-apply'),
  langSwitch: document.getElementById('lang-switch'),
  jumpBack: document.getElementById('jump-back'),
  reactionPopover: document.getElementById('reaction-popover'),
  lightbox: document.getElementById('lightbox'),
  lightboxBody: document.getElementById('lightbox-body'),
  lightboxClose: document.getElementById('lightbox-close'),
  toast: document.getElementById('toast')
};

let lastJump = null;
let reactionTimer = 0;
let reactionHideTimer = 0;
let longPressReaction = false;

function loadLang() {
  try {
    return localStorage.getItem('snapeverse-lang') === 'ru' ? 'ru' : 'uk';
  } catch (error) {
    return 'uk';
  }
}

function saveLang() {
  try {
    localStorage.setItem('snapeverse-lang', state.lang);
  } catch (error) {
    void error;
  }
}

function t(key, vars) {
  let value = (I18N[state.lang] && I18N[state.lang][key]) || I18N.uk[key] || key;
  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) {
      value = value.split(`{${name}}`).join(String(replacement));
    }
  }
  return value;
}

function plural(n, forms) {
  const abs = Math.abs(Number(n) || 0);
  const n10 = abs % 10;
  const n100 = abs % 100;
  if (n10 === 1 && n100 !== 11) return forms[0];
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return forms[1];
  return forms[2];
}

function countLabel(n, type) {
  return `${fmtNum(n)} ${plural(n, FORMS[state.lang][type])}`;
}

function localized(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[state.lang] || value.uk || value.ru || '';
}

function fmtNum(n) {
  const value = Number(n) || 0;
  try {
    return value.toLocaleString(state.lang === 'uk' ? 'uk-UA' : 'ru-RU');
  } catch (error) {
    return String(value);
  }
}

function fmtDate(value) {
  if (!value) return '';
  const parts = String(value).slice(0, 10).split('-');
  if (parts.length !== 3) return String(value);
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (!year || !month || !day) return String(value);
  return `${day} ${MONTHS[state.lang][month - 1]} ${year}`;
}

function fmtTime(value) {
  return value ? String(value).slice(11, 16) : '';
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function debounce(fn, delay) {
  let timer = 0;
  return function debounced() {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

function charName(id, full) {
  const char = CHAR[id];
  if (!char) return '';
  return localized(full ? char.full : char.label);
}

function charLabel(ids, full) {
  const list = (ids || []).filter((id) => CHAR[id]);
  if (list.length > 1) {
    return `${charName(list[0], full)} ${t('and')} ${charName(list[1], full)}`;
  }
  return list.length ? charName(list[0], full) : '';
}

function themeLabel(theme) {
  return theme ? localized(theme.label) : '';
}

function themeTagHtml(scene, id, full) {
  const theme = THEME[id];
  if (!theme) return '';
  if (id === 'private' && scene.pw) {
    const label = full ? `🔒 ${t('privateWith')} ${scene.pw}` : `🔒 ${scene.pw}`;
    return `<span class="tag private" title="${escapeAttr(`${t('privateWith')} ${scene.pw}`)}">${escapeHtml(label)}</span>`;
  }
  return `<span class="tag ${escapeHtml(id)}">${escapeHtml(themeLabel(theme))}</span>`;
}

function mediaLabel(media) {
  if (!media) return '';
  const parts = String(media).split(':');
  const kind = parts[0];
  const extra = parts.slice(1).join(':');
  const key = MEDIA_KEYS[kind];
  const base = key ? t(key) : String(media);
  if (kind === 'sticker' && extra) return `${base} ${extra}`;
  if (kind === 'file' && extra) return `${base} ${extra}`;
  return base;
}

function initialsFor(name) {
  const clean = String(name || '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return '?';
  const parts = clean.split(' ');
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function colorFor(name) {
  const text = String(name || '?');
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return `hsl(${hash % 360} 42% 46%)`;
}

function getTokens() {
  const query = state.query.trim().toLowerCase();
  if (!query) return [];
  if (state.searchMode === 'phrase') return [query];
  return query.split(/\s+/).filter(Boolean);
}

function searchRegex(flags) {
  if (!state.tokens.length) return null;
  if (state.searchMode === 'phrase') {
    const words = state.tokens[0].split(/\s+/).filter(Boolean).map(escapeRegExp);
    if (!words.length) return null;
    return new RegExp(`(${words.join('\\s+')})`, flags);
  }
  const pattern = state.tokens
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');
  return pattern ? new RegExp(`(${pattern})`, flags) : null;
}

function sceneHay(scene) {
  if (!scene._hay) {
    const parts = [scene.preview || '', scene.chat || ''];
    for (const person of scene.people) parts.push(person.n);
    for (const message of scene.messages) {
      if (message.t) parts.push(message.t);
    }
    scene._hay = parts.join('\n').toLowerCase();
  }
  return scene._hay;
}

function countHits(scene, tokens) {
  if (!tokens.length) return 0;
  const regex = state.searchMode === 'phrase' ? searchRegex('gi') : null;
  let total = 0;
  for (const message of scene.messages) {
    const text = String(message.t || '').toLowerCase();
    if (!text) continue;
    if (regex) {
      regex.lastIndex = 0;
      let match = regex.exec(text);
      while (match) {
        total += 1;
        if (match[0].length === 0) regex.lastIndex += 1;
        match = regex.exec(text);
      }
      continue;
    }
    for (const token of tokens) {
      let index = 0;
      while ((index = text.indexOf(token, index)) !== -1) {
        total += 1;
        index += token.length;
      }
    }
  }
  return total;
}

function sceneMatches(scene, tokens) {
  if (state.character !== 'all') {
    if (state.character === 'both') {
      if (!(scene.chars.includes('severus') && scene.chars.includes('lucius'))) return false;
    } else if (!scene.chars.includes(state.character)) {
      return false;
    }
  }
  if (state.date !== 'all' && scene.d !== state.date) return false;
  if (state.themes.size > 0) {
    let match = false;
    for (const id of state.themes) {
      if (scene.themes.includes(id)) {
        match = true;
        break;
      }
    }
    if (!match) return false;
  }
  if (tokens.length > 0) {
    if (state.searchMode === 'phrase') {
      const regex = searchRegex('i');
      if (!regex) return false;
      let found = false;
      for (const message of scene.messages) {
        const text = message.t;
        if (!text) continue;
        regex.lastIndex = 0;
        if (regex.test(text)) {
          found = true;
          break;
        }
      }
      if (!found) return false;
    } else {
      const hay = sceneHay(scene);
      if (!tokens.every((token) => hay.includes(token))) return false;
    }
  }
  return true;
}

function sortScenes(list) {
  const sorted = list.slice();
  const byStart = (a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id);
  if (state.sort === 'new') sorted.sort((a, b) => byStart(b, a));
  else if (state.sort === 'long') sorted.sort((a, b) => b.n - a.n || byStart(a, b));
  else if (state.sort === 'short') sorted.sort((a, b) => a.n - b.n || byStart(a, b));
  else sorted.sort(byStart);
  return sorted;
}

function filteredScenes(tokens) {
  return sortScenes(DATA.scenes.filter((scene) => sceneMatches(scene, tokens)));
}

function prepareData() {
  CHAR = Object.fromEntries(DATA.characters.map((char) => [char.id, char]));
  THEME = Object.fromEntries(DATA.themes.map((theme) => [theme.id, theme]));
  sceneById = new Map(DATA.scenes.map((scene) => [scene.id, scene]));
  for (const scene of DATA.scenes) {
    scene._msgById = new Map(scene.messages.map((message) => [message.i, message]));
  }
}

async function loadData() {
  if (window.__ARCHIVE_DATA__) return window.__ARCHIVE_DATA__;
  const response = await fetch('./chats_data.json', { cache: 'no-cache' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = t(element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
}

function populateDates() {
  const current = state.date;
  els.dateSelect.textContent = '';
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = t('allDates');
  els.dateSelect.appendChild(allOption);

  const dates = DATA.dates.slice().reverse();
  for (const entry of dates) {
    const option = document.createElement('option');
    option.value = entry.d;
    option.textContent = `${fmtDate(entry.d)} · ${charLabel(entry.chars)} · ${countLabel(entry.scenes, 'scene')}`;
    els.dateSelect.appendChild(option);
  }
  els.dateSelect.value = current;
  if (els.dateSelect.value !== current) {
    state.date = 'all';
    els.dateSelect.value = 'all';
  }
}

function renderThemeList() {
  els.themeList.textContent = '';
  for (const theme of DATA.themes) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-option';
    button.dataset.theme = theme.id;
    button.setAttribute('aria-pressed', pendingThemes.has(theme.id) ? 'true' : 'false');
    button.innerHTML = `<span class="theme-option-label">${escapeHtml(themeLabel(theme))}</span><span class="theme-option-count">${countLabel(theme.count, 'scene')}</span>`;
    els.themeList.appendChild(button);
  }
}

function renderActiveThemes() {
  els.activeThemes.textContent = '';
  const ids = Array.from(state.themes);
  els.themeCount.hidden = ids.length === 0;
  els.themeCount.textContent = String(ids.length);
  for (const id of ids) {
    const theme = THEME[id];
    if (!theme) continue;
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'theme-pill';
    pill.dataset.removeTheme = id;
    pill.title = t('reset');
    pill.innerHTML = `<span>${escapeHtml(themeLabel(theme))}</span><b>×</b>`;
    els.activeThemes.appendChild(pill);
  }
}

function updateSearchModes() {
  els.searchModes.querySelectorAll('[data-search-mode]').forEach((button) => {
    const active = button.dataset.searchMode === state.searchMode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function updateQuickChars() {
  els.quickChars.querySelectorAll('[data-character]').forEach((button) => {
    const value = button.dataset.character;
    button.classList.toggle('active', value === state.character);
    if (value === 'all') button.textContent = t('all');
    else if (value === 'both') button.textContent = t('both');
    else button.textContent = charName(value);
  });
}

function renderSceneList(scenes, tokens, totalHits) {
  els.sceneList.textContent = '';
  if (!scenes.length) {
    const empty = document.createElement('div');
    empty.className = 'scene-empty';
    empty.innerHTML = `<strong>${escapeHtml(t('nothingFound'))}</strong>${escapeHtml(t('nothingFoundHint'))}`;
    els.sceneList.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const scene of scenes) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `scene-card${scene.id === state.selectedId ? ' active' : ''}`;
    button.dataset.scene = scene.id;
    button.setAttribute('role', 'listitem');

    const chars = scene.chars.map((id) => {
      const char = CHAR[id];
      if (!char) return '';
      return `<span class="char-dot" style="--c:${char.color}">${escapeHtml(charName(id))}</span>`;
    }).join('');

    const specialThemes = scene.themes.filter((id) => id !== 'general');
    const themeIds = specialThemes.length ? specialThemes : ['general'];
    const tags = themeIds.map((id) => themeTagHtml(scene, id, false)).join('');

    const members = scene.people.filter((person) => !person.sys && person.k > 0).length;
    const hits = tokens.length && scene._hits > 0
      ? `<span class="metric hits">${countLabel(scene._hits, 'match')}</span>`
      : '';

    button.innerHTML = `
      <span class="scene-card-top">
        <span class="scene-date">${escapeHtml(fmtDate(scene.d))}</span>
        <span class="scene-clock">${escapeHtml(fmtTime(scene.start))}</span>
      </span>
      <span class="scene-preview">${escapeHtml(scene.preview || '—')}</span>
      <span class="scene-meta">
        ${chars}
        ${tags}
        <span class="metric">${countLabel(scene.n, 'message')}</span>
        <span class="metric">${countLabel(members, 'member')}</span>
        ${hits}
      </span>`;
    fragment.appendChild(button);
  }
  els.sceneList.appendChild(fragment);
}

function updateResultsLabel(scenes, tokens, totalHits) {
  if (tokens.length > 0) {
    const hits = totalHits > 0 ? ` · ${countLabel(totalHits, 'match')}` : '';
    els.resultsLabel.textContent = `${countLabel(scenes.length, 'scene')}${hits}`;
    return;
  }
  const messages = scenes.reduce((sum, scene) => sum + scene.n, 0);
  els.resultsLabel.textContent = `${countLabel(scenes.length, 'scene')} · ${countLabel(messages, 'message')}`;
}

function applyFilters(options = {}) {
  const tokens = getTokens();
  state.tokens = tokens;
  const scenes = filteredScenes(tokens);
  let totalHits = 0;
  if (tokens.length > 0) {
    for (const scene of scenes) {
      scene._hits = countHits(scene, tokens);
      totalHits += scene._hits;
    }
  } else {
    for (const scene of scenes) scene._hits = 0;
  }
  state.visible = scenes;
  renderSceneList(scenes, tokens, totalHits);
  updateResultsLabel(scenes, tokens, totalHits);
  if (options.openFirst) {
    if (scenes.length) openScene(scenes[0].id, { jumpToMatch: tokens.length > 0 });
    else toast(t('nothingFound'));
  }
  return scenes;
}

function navScenes() {
  if (state.selectedId && state.visible.some((scene) => scene.id === state.selectedId)) {
    return state.visible;
  }
  return sortScenes(DATA.scenes);
}

function updateNavButtons() {
  const list = navScenes();
  const index = list.findIndex((scene) => scene.id === state.selectedId);
  els.prevScene.disabled = index <= 0;
  els.nextScene.disabled = index < 0 || index >= list.length - 1;
}

function markActiveCard(scroll) {
  els.sceneList.querySelectorAll('.scene-card.active').forEach((card) => card.classList.remove('active'));
  if (!state.selectedId) return;
  const card = els.sceneList.querySelector(`[data-scene="${state.selectedId}"]`);
  if (!card) return;
  card.classList.add('active');
  if (scroll) card.scrollIntoView({ block: 'nearest' });
}

function setHash(id) {
  try {
    const base = `${location.pathname}${location.search}`;
    const hash = id ? `#scene=${encodeURIComponent(id)}` : '';
    history.replaceState(null, '', `${base}${hash}`);
  } catch (error) {
    void error;
  }
}

function readHash() {
  const raw = location.hash.replace(/^#/, '');
  if (!raw.startsWith('scene=')) return null;
  try {
    return decodeURIComponent(raw.slice(6));
  } catch (error) {
    return null;
  }
}

function openScene(id, options = {}) {
  const scene = sceneById.get(id);
  if (!scene) return;
  state.selectedId = id;
  lastJump = null;
  els.jumpBack.hidden = true;
  hideReactionPopover();
  els.body.classList.add('chat-open');
  els.chatView.hidden = false;
  els.chatEmpty.hidden = true;
  setHash(id);
  renderChat(scene, options);
  markActiveCard(true);
}

function closeChat() {
  state.selectedId = null;
  lastJump = null;
  els.jumpBack.hidden = true;
  hideReactionPopover();
  els.body.classList.remove('chat-open');
  els.chatView.hidden = true;
  els.chatEmpty.hidden = false;
  setHash(null);
  markActiveCard(false);
}

function chatTagsHtml(scene) {
  const chars = scene.chars.map((id) => {
    const char = CHAR[id];
    if (!char) return '';
    return `<span class="char-dot" style="--c:${char.color}">${escapeHtml(charName(id, true))}</span>`;
  }).join('');
  const themes = scene.themes.map((id) => themeTagHtml(scene, id, true)).join('');
  const members = scene.people.filter((person) => !person.sys && person.k > 0).length;
  return `${chars}${themes}<span class="metric">${countLabel(scene.n, 'message')}</span><span class="metric">${countLabel(members, 'member')}</span>`;
}

function replyQuoteHtml(message, scene) {
  if (!message.r) return '';
  const parent = scene._msgById.get(message.r);
  if (!parent) return '';
  const person = scene.people[parent.a] || { n: '?' };
  let snippet = parent.t || mediaLabel(parent.m) || '—';
  snippet = snippet.replace(/\s+/g, ' ').trim().slice(0, 120);
  return `<button class="reply-quote" type="button" data-target="${parent.i}" title="${escapeAttr(t('goToMessage'))}"><span class="reply-author">${escapeHtml(person.n)}</span><span class="reply-text">${escapeHtml(snippet)}</span></button>`;
}

function messageTextHtml(message) {
  if (message.h) return `<div class="msg-text">${message.h}</div>`;
  if (message.t) return `<div class="msg-text">${escapeHtml(message.t)}</div>`;
  return '';
}

function messageMediaHtml(message) {
  if (!message.m) return '';
  const label = mediaLabel(message.m);
  if (message.src) {
    const source = escapeAttr(message.src);
    const isSticker = Boolean(message.tg);
    const isPhoto = String(message.m).startsWith('photo');
    const caption = !isSticker && !isPhoto ? `<span class="media-caption">${escapeHtml(label)}</span>` : '';
    if (message.mk === 'video') {
      const poster = message.poster ? ` poster="${escapeAttr(message.poster)}"` : '';
      return `<div class="msg-media-wrap"><video class="msg-media${isSticker ? ' sticker' : ''}" src="${source}"${poster} autoplay loop muted playsinline preload="metadata" data-media-src="${source}" data-media-kind="video"></video>${caption}</div>`;
    }
    return `<div class="msg-media-wrap"><button class="msg-media-btn" type="button" data-media-src="${source}" data-media-kind="image"><img class="msg-media${isSticker ? ' sticker' : ''}" src="${source}" alt="${escapeAttr(label)}" loading="lazy"></button>${caption}</div>`;
  }
  return `<div class="media">${escapeHtml(label)}</div>`;
}

function messageReactionsHtml(message) {
  if (!message.x || !message.x.length) return '';
  const items = message.x.map((item, index) => {
    const names = Array.isArray(item[2]) ? item[2] : [];
    const title = names.length ? `${item[0]} ${item[1]} — ${names.join(', ')}` : `${item[0]} ${item[1]}`;
    return `<button class="reaction" type="button" data-reaction-message="${message.i}" data-reaction-index="${index}" title="${escapeAttr(title)}">${escapeHtml(item[0])} ${escapeHtml(item[1])}</button>`;
  }).join('');
  return `<div class="reactions">${items}</div>`;
}

function messageHtml(message, scene, isContext) {
  const person = scene.people[message.a] || { n: '?', c: null, sys: false };
  const isAnchor = Boolean(person.c);
  const color = isAnchor ? CHAR[person.c].color : colorFor(person.n);
  const initials = isAnchor ? CHAR[person.c].initials : initialsFor(person.n);
  const avatarUrl = isAnchor ? CHAR[person.c].avatar : null;
  const avatarInner = avatarUrl
    ? `<span class="avatar-initials">${escapeHtml(initials)}</span><img src="${escapeAttr(avatarUrl)}" alt="" loading="lazy" onerror="this.remove()">`
    : escapeHtml(initials);
  const classes = ['msg-row'];
  if (isAnchor) classes.push('is-anchor');
  if (isContext) classes.push('is-context', 'context-row');
  const badge = isAnchor ? `<span class="char-badge">${escapeHtml(charName(person.c))}</span>` : '';
  const ctxBadge = isContext ? `<span class="ctx-badge">${escapeHtml(t('contextShort'))}</span>` : '';
  const edited = message.e ? `<span class="edited">${escapeHtml(t('edited'))}</span>` : '';
  const forwarded = message.fwd ? `<div class="forwarded">${escapeHtml(t('forwarded'))} ${escapeHtml(message.fwd)}</div>` : '';

  return `
    <article class="${classes.join(' ')}" id="m-${message.i}" data-msg="${message.i}" style="--c:${color}">
      <div class="avatar${isAnchor ? ' char' : ''}" style="--a:${color}" title="${escapeAttr(person.n)}" aria-hidden="true">${avatarInner}</div>
      <div class="msg-body">
        <div class="msg-meta">
          <span class="author">${escapeHtml(person.n)}</span>
          ${badge}
          ${ctxBadge}
          <span class="msg-time">${escapeHtml(fmtTime(message.d))}</span>
          ${edited}
        </div>
        <div class="bubble">
          ${forwarded}
          ${replyQuoteHtml(message, scene)}
          ${messageTextHtml(message)}
          ${messageMediaHtml(message)}
          ${messageReactionsHtml(message)}
        </div>
      </div>
    </article>`;
}

function contextBlockHtml(messages, scene, open) {
  if (!messages.length) return '';
  const body = messages.map((message) => messageHtml(message, scene, true)).join('');
  return `<details class="context-block"${open ? ' open' : ''}><summary>${escapeHtml(t('context'))} (${messages.length})</summary><div class="context-list">${body}</div></details>`;
}

function renderChat(scene, options = {}) {
  const previousScroll = els.messages.scrollTop;
  const tokens = state.tokens;
  hideReactionPopover();
  els.jumpBack.hidden = !lastJump;
  els.chatView.hidden = false;
  els.chatEmpty.hidden = true;

  els.chatTitle.textContent = `${fmtDate(scene.d)} · ${charLabel(scene.chars, true)}`;
  els.chatTime.textContent = `${fmtTime(scene.start)}–${fmtTime(scene.end)}`;
  const members = scene.people.filter((person) => !person.sys && person.k > 0).length;
  els.chatSub.textContent = `${countLabel(scene.n, 'message')} · ${scene.chat} · ${countLabel(members, 'member')}`;
  els.chatTags.innerHTML = chatTagsHtml(scene);

  const context = scene.messages.filter((message) => message.ctx);
  const main = scene.messages.filter((message) => !message.ctx);
  let html = contextBlockHtml(context, scene, tokens.length > 0);
  let lastDate = '';
  for (const message of main) {
    const date = message.d.slice(0, 10);
    if (date !== lastDate) {
      html += `<div class="date-sep"><span>${escapeHtml(fmtDate(date))}</span></div>`;
      lastDate = date;
    }
    html += messageHtml(message, scene, false);
  }
  els.messages.innerHTML = html;

  let marks = 0;
  if (tokens.length > 0) {
    const regex = searchRegex('gi');
    if (regex) {
      els.messages.querySelectorAll('.msg-text').forEach((element) => {
        marks += highlightTextNodes(element, tokens, regex);
      });
    }
    els.matchBar.hidden = false;
    els.matchLabel.textContent = marks > 0 ? countLabel(marks, 'match') : t('noMatchHere');
    els.matchJump.hidden = marks === 0;
  } else {
    els.matchBar.hidden = true;
    els.matchJump.hidden = false;
  }

  if (options.keepScroll) {
    els.messages.scrollTop = previousScroll;
  } else {
    els.messages.scrollTop = 0;
  }
  updateNavButtons();
  if (tokens.length > 0 && options.jumpToMatch) {
    requestAnimationFrame(() => jumpToFirstMatch(false));
  }
}

function highlightTextNodes(root, tokens, preparedRegex) {
  if (!tokens.length) return 0;
  const regex = preparedRegex || searchRegex('gi');
  if (!regex) return 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  let count = 0;
  for (const textNode of nodes) {
    const text = textNode.nodeValue;
    if (!text) continue;
    regex.lastIndex = 0;
    if (!regex.test(text)) continue;
    regex.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let last = 0;
    let match = regex.exec(text);
    while (match) {
      if (match.index > last) fragment.appendChild(document.createTextNode(text.slice(last, match.index)));
      const mark = document.createElement('mark');
      mark.textContent = match[0];
      fragment.appendChild(mark);
      count += 1;
      last = match.index + match[0].length;
      if (match[0].length === 0) regex.lastIndex += 1;
      match = regex.exec(text);
    }
    if (last < text.length) fragment.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(fragment, textNode);
  }
  return count;
}

function flashRow(target) {
  target.classList.remove('is-flash');
  void target.offsetWidth;
  target.classList.add('is-flash');
  setTimeout(() => target.classList.remove('is-flash'), 1500);
}

function jumpToMessage(id, sourceId) {
  const target = document.getElementById(`m-${id}`);
  if (!target) return;
  if (sourceId) {
    lastJump = { sourceId, scrollTop: els.messages.scrollTop };
    els.jumpBack.hidden = false;
  }
  const details = target.closest('details');
  if (details) details.open = true;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  flashRow(target);
}

function returnToReading() {
  if (!lastJump) {
    els.jumpBack.hidden = true;
    return;
  }
  const jump = lastJump;
  lastJump = null;
  els.jumpBack.hidden = true;
  if (jump.sourceId) {
    const source = document.getElementById(`m-${jump.sourceId}`);
    if (source) {
      const details = source.closest('details');
      if (details) details.open = true;
      source.scrollIntoView({ behavior: 'smooth', block: 'center' });
      flashRow(source);
      return;
    }
  }
  els.messages.scrollTo({ top: jump.scrollTop, behavior: 'smooth' });
}

function openLightbox(source, kind) {
  if (!source) return;
  els.lightboxBody.textContent = '';
  if (kind === 'video') {
    const video = document.createElement('video');
    video.src = source;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    els.lightboxBody.appendChild(video);
  } else {
    const image = document.createElement('img');
    image.src = source;
    image.alt = '';
    els.lightboxBody.appendChild(image);
  }
  els.lightbox.hidden = false;
}

function closeLightbox() {
  els.lightbox.hidden = true;
  els.lightboxBody.textContent = '';
}

function hideReactionPopover() {
  clearTimeout(reactionHideTimer);
  els.reactionPopover.hidden = true;
  els.reactionPopover.textContent = '';
}

function positionReactionPopover(button) {
  const popover = els.reactionPopover;
  const rect = button.getBoundingClientRect();
  popover.style.left = '0px';
  popover.style.top = '0px';
  popover.hidden = false;
  const width = popover.offsetWidth;
  const height = popover.offsetHeight;
  let left = rect.left + rect.width / 2 - width / 2;
  let top = rect.top - height - 8;
  if (top < 8) top = rect.bottom + 8;
  if (left < 8) left = 8;
  if (left + width > window.innerWidth - 8) left = window.innerWidth - width - 8;
  if (top + height > window.innerHeight - 8) top = Math.max(8, window.innerHeight - height - 8);
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
}

function showReactionPopover(button) {
  const scene = sceneById.get(state.selectedId);
  if (!scene) return;
  const message = scene._msgById.get(Number(button.dataset.reactionMessage));
  if (!message || !message.x) return;
  const item = message.x[Number(button.dataset.reactionIndex)];
  if (!item) return;
  const names = Array.isArray(item[2]) ? item[2] : [];
  const total = Number(item[1]);
  let html = `<div class="reaction-popover-title">${escapeHtml(item[0])} · ${escapeHtml(item[1])}</div>`;
  if (names.length) {
    html += `<div class="reaction-people-title">${escapeHtml(t('reactionPeople'))}</div>`;
    html += `<div class="reaction-people">${names.map((name) => `<span class="reaction-person"><span class="mini-avatar" style="--a:${colorFor(name)}">${escapeHtml(initialsFor(name))}</span><span>${escapeHtml(name)}</span></span>`).join('')}</div>`;
  } else {
    html += `<div class="reaction-empty">${escapeHtml(t('reactionUnknown'))}</div>`;
  }
  if (names.length < total) {
    html += `<div class="reaction-more">${escapeHtml(t('reactionShown', { shown: names.length, total }))}</div>`;
  }
  els.reactionPopover.innerHTML = html;
  els.reactionPopover.dataset.owner = `${button.dataset.reactionMessage}:${button.dataset.reactionIndex}`;
  clearTimeout(reactionHideTimer);
  positionReactionPopover(button);
}

function jumpToFirstMatch(smooth) {
  const mark = els.messages.querySelector('mark');
  if (!mark) return;
  const details = mark.closest('details');
  if (details) details.open = true;
  mark.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' });
}

function goRelative(delta) {
  const list = navScenes();
  const index = list.findIndex((scene) => scene.id === state.selectedId);
  const next = list[index + delta];
  if (next) openScene(next.id, { jumpToMatch: state.tokens.length > 0 });
}

function buildEmptyStats() {
  const meta = DATA.meta;
  els.emptyStats.innerHTML = `
    <span class="empty-stat"><b>${fmtNum(meta.total_scenes)}</b> ${plural(meta.total_scenes, FORMS[state.lang].scene)}</span>
    <span class="empty-stat"><b>${fmtNum(meta.total_dates)}</b> ${plural(meta.total_dates, FORMS[state.lang].date)}</span>
    <span class="empty-stat"><b>${fmtNum(meta.total_messages)}</b> ${plural(meta.total_messages, FORMS[state.lang].message)}</span>`;
}

function renderFooter() {
  const meta = DATA.meta;
  const updated = meta.generated_at ? `${t('updated')} ${fmtDate(meta.generated_at.slice(0, 10))}` : '';
  els.sidebarFoot.innerHTML = `<b>${fmtNum(meta.total_scenes)}</b> ${plural(meta.total_scenes, FORMS[state.lang].scene)} · <b>${fmtNum(meta.total_dates)}</b> ${plural(meta.total_dates, FORMS[state.lang].date)} · <b>${fmtNum(meta.total_messages)}</b> ${plural(meta.total_messages, FORMS[state.lang].message)}${updated ? `<br>${escapeHtml(updated)}` : ''}`;
}

function applyLanguage(lang) {
  state.lang = lang === 'ru' ? 'ru' : 'uk';
  document.documentElement.lang = state.lang;
  saveLang();
  els.langSwitch.querySelectorAll('[data-lang]').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === state.lang);
  });
  applyStaticI18n();
  updateSearchModes();
  updateQuickChars();
  populateDates();
  renderThemeList();
  renderActiveThemes();
  buildEmptyStats();
  renderFooter();
  applyFilters();
  if (state.selectedId) {
    const scene = sceneById.get(state.selectedId);
    if (scene) renderChat(scene, { keepScroll: true });
  }
  document.title = state.lang === 'uk' ? 'Snapeverse · Архів чатів' : 'Snapeverse · Архив чатов';
}

function openThemes() {
  pendingThemes = new Set(state.themes);
  renderThemeList();
  els.overlay.hidden = false;
}

function closeThemes() {
  els.overlay.hidden = true;
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => els.toast.classList.remove('show'), 2300);
}

function copyLink() {
  if (!state.selectedId) return;
  const base = location.href.split('#')[0];
  const url = `${base}#scene=${encodeURIComponent(state.selectedId)}`;
  const done = () => toast(t('copied'));
  const fail = () => toast(t('copyFailed'));

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(done).catch(fail);
    return;
  }
  const area = document.createElement('textarea');
  area.value = url;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try {
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    if (ok) done();
    else fail();
  } catch (error) {
    document.body.removeChild(area);
    fail();
  }
}

function showLoadError() {
  els.loading.hidden = true;
  els.chatEmpty.hidden = false;
  els.chatEmpty.innerHTML = `<div class="empty-art">!</div><h2>${escapeHtml(t('errorTitle'))}</h2><p>${escapeHtml(t('errorText'))}</p><p>${escapeHtml(t('errorHint'))}</p>`;
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (!location.protocol.startsWith('http')) return;
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

function bindEvents() {
  const debouncedSearch = debounce(() => {
    state.query = els.search.value;
    els.searchClear.hidden = !state.query;
    applyFilters();
    if (state.selectedId) {
      const scene = sceneById.get(state.selectedId);
      if (scene) renderChat(scene, { keepScroll: true });
    }
  }, 170);

  els.searchModes.addEventListener('click', (event) => {
    const button = event.target.closest('[data-search-mode]');
    if (!button || button.dataset.searchMode === state.searchMode) return;
    state.searchMode = button.dataset.searchMode;
    updateSearchModes();
    applyFilters();
    if (state.selectedId) {
      const scene = sceneById.get(state.selectedId);
      if (scene) renderChat(scene, { keepScroll: true });
    }
  });

  els.search.addEventListener('input', debouncedSearch);
  els.search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      jumpToFirstMatch(true);
    }
    if (event.key === 'Escape') {
      els.search.value = '';
      els.searchClear.hidden = true;
      state.query = '';
      applyFilters();
      if (state.selectedId) {
        const scene = sceneById.get(state.selectedId);
        if (scene) renderChat(scene, { keepScroll: true });
      }
    }
  });

  els.searchClear.addEventListener('click', () => {
    els.search.value = '';
    els.searchClear.hidden = true;
    state.query = '';
    els.search.focus();
    applyFilters();
    if (state.selectedId) {
      const scene = sceneById.get(state.selectedId);
      if (scene) renderChat(scene, { keepScroll: true });
    }
  });

  els.dateSelect.addEventListener('change', () => {
    state.date = els.dateSelect.value;
    if (state.date !== 'all') {
      const tokens = getTokens();
      if (!DATA.scenes.some((scene) => sceneMatches(scene, tokens))) {
        state.character = 'all';
        state.themes.clear();
        state.query = '';
        els.search.value = '';
        els.searchClear.hidden = true;
        updateQuickChars();
        renderActiveThemes();
      }
      applyFilters({ openFirst: true });
    } else {
      applyFilters();
    }
  });

  els.sortSelect.addEventListener('change', () => {
    state.sort = els.sortSelect.value;
    applyFilters();
  });

  els.quickChars.addEventListener('click', (event) => {
    const button = event.target.closest('[data-character]');
    if (!button) return;
    state.character = button.dataset.character;
    updateQuickChars();
    applyFilters();
  });

  els.themesOpen.addEventListener('click', openThemes);
  els.themesOpen2.addEventListener('click', openThemes);
  els.themesClose.addEventListener('click', closeThemes);
  els.themesApply.addEventListener('click', () => {
    state.themes = new Set(pendingThemes);
    closeThemes();
    renderActiveThemes();
    applyFilters();
  });
  els.themesReset.addEventListener('click', () => {
    pendingThemes.clear();
    state.themes.clear();
    renderThemeList();
    renderActiveThemes();
    applyFilters();
  });
  els.overlay.addEventListener('click', (event) => {
    if (event.target === els.overlay) closeThemes();
  });

  els.themeList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme]');
    if (!button) return;
    const id = button.dataset.theme;
    if (pendingThemes.has(id)) pendingThemes.delete(id);
    else pendingThemes.add(id);
    button.setAttribute('aria-pressed', pendingThemes.has(id) ? 'true' : 'false');
  });

  els.activeThemes.addEventListener('click', (event) => {
    const button = event.target.closest('[data-remove-theme]');
    if (!button) return;
    state.themes.delete(button.dataset.removeTheme);
    renderActiveThemes();
    applyFilters();
  });

  els.sceneList.addEventListener('click', (event) => {
    const card = event.target.closest('[data-scene]');
    if (!card) return;
    openScene(card.dataset.scene, { jumpToMatch: state.tokens.length > 0 });
  });

  els.messages.addEventListener('click', (event) => {
    const media = event.target.closest('[data-media-src]');
    if (media) {
      openLightbox(media.dataset.mediaSrc, media.dataset.mediaKind);
      return;
    }

    const reaction = event.target.closest('[data-reaction-index]');
    if (reaction) {
      if (longPressReaction) {
        longPressReaction = false;
        return;
      }
      const key = `${reaction.dataset.reactionMessage}:${reaction.dataset.reactionIndex}`;
      if (!els.reactionPopover.hidden && els.reactionPopover.dataset.owner === key) {
        hideReactionPopover();
      } else {
        showReactionPopover(reaction);
      }
      return;
    }

    const spoiler = event.target.closest('.spoiler');
    if (spoiler) {
      spoiler.classList.toggle('revealed');
      return;
    }

    const quote = event.target.closest('[data-target]');
    if (quote) {
      const row = quote.closest('.msg-row');
      jumpToMessage(quote.dataset.target, row ? row.dataset.msg : null);
    }
  });

  els.messages.addEventListener('contextmenu', (event) => {
    const reaction = event.target.closest('[data-reaction-index]');
    if (!reaction) return;
    event.preventDefault();
    showReactionPopover(reaction);
  });

  els.messages.addEventListener('mouseover', (event) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const reaction = event.target.closest('[data-reaction-index]');
    if (reaction) showReactionPopover(reaction);
  });

  els.messages.addEventListener('mouseout', (event) => {
    const reaction = event.target.closest('[data-reaction-index]');
    if (!reaction) return;
    clearTimeout(reactionHideTimer);
    reactionHideTimer = setTimeout(() => {
      if (!els.reactionPopover.matches(':hover')) hideReactionPopover();
    }, 220);
  });

  els.messages.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') return;
    const reaction = event.target.closest('[data-reaction-index]');
    if (!reaction) return;
    clearTimeout(reactionTimer);
    reactionTimer = setTimeout(() => {
      longPressReaction = true;
      showReactionPopover(reaction);
      setTimeout(() => {
        longPressReaction = false;
      }, 900);
    }, 450);
  });

  els.messages.addEventListener('pointerup', () => clearTimeout(reactionTimer));
  els.messages.addEventListener('pointercancel', () => {
    clearTimeout(reactionTimer);
    longPressReaction = false;
  });

  els.messages.addEventListener('scroll', hideReactionPopover, { passive: true });

  els.messages.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('spoiler')) {
      event.preventDefault();
      event.target.classList.toggle('revealed');
    }
  });

  els.reactionPopover.addEventListener('mouseenter', () => clearTimeout(reactionHideTimer));
  els.reactionPopover.addEventListener('mouseleave', () => {
    reactionHideTimer = setTimeout(hideReactionPopover, 180);
  });

  document.addEventListener('click', (event) => {
    if (els.reactionPopover.hidden) return;
    if (event.target.closest('#reaction-popover') || event.target.closest('[data-reaction-index]')) return;
    hideReactionPopover();
  });

  els.lightboxClose.addEventListener('click', closeLightbox);
  els.lightbox.addEventListener('click', (event) => {
    if (event.target === els.lightbox) closeLightbox();
  });

  els.jumpBack.addEventListener('click', returnToReading);

  els.langSwitch.addEventListener('click', (event) => {
    const button = event.target.closest('[data-lang]');
    if (!button) return;
    if (button.dataset.lang !== state.lang) applyLanguage(button.dataset.lang);
  });

  els.openLatest.addEventListener('click', () => {
    const latest = DATA.scenes[DATA.scenes.length - 1];
    if (latest) openScene(latest.id);
  });

  els.backBtn.addEventListener('click', closeChat);
  els.prevScene.addEventListener('click', () => goRelative(-1));
  els.nextScene.addEventListener('click', () => goRelative(1));
  els.shareScene.addEventListener('click', copyLink);
  els.matchJump.addEventListener('click', () => jumpToFirstMatch(true));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!els.lightbox.hidden) {
      closeLightbox();
      return;
    }
    if (!els.reactionPopover.hidden) {
      hideReactionPopover();
      return;
    }
    if (!els.overlay.hidden) closeThemes();
  });

  window.addEventListener('hashchange', () => {
    const id = readHash();
    if (id && id !== state.selectedId && sceneById.has(id)) {
      openScene(id, { jumpToMatch: state.tokens.length > 0 });
    } else if (!id && state.selectedId) {
      closeChat();
    }
  });
}

async function boot() {
  applyStaticI18n();
  try {
    DATA = await loadData();
    prepareData();
    bindEvents();
    applyLanguage(state.lang);
    els.loading.hidden = true;
    const initial = readHash();
    if (initial && sceneById.has(initial)) {
      openScene(initial, { jumpToMatch: state.tokens.length > 0 });
    }
    registerServiceWorker();
  } catch (error) {
    showLoadError();
  }
}

boot();
