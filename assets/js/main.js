(function () {
  'use strict';

  var KEY = 'prismplus-lang';

  // Russian strings. English is the source text written in the HTML itself;
  // a missing key simply falls back to English.
  var RU = {
    'nav.home': 'Главная', 'nav.features': 'Возможности', 'nav.download': 'Загрузка',
    'nav.docs': 'Документация', 'nav.changelog': 'Журнал изменений', 'nav.about': 'О проекте',
    'menu': 'Меню', 'lang.label': 'Язык',
    'f.tag': 'Сообщественный лаунчер Minecraft на основе Prism Launcher.',
    'f.legal': '© 2026 Minos_Team. Сайт распространяется по лицензии MIT. Prism+ — независимый проект сообщества.',

    't.home': 'Prism+ — лаунчер Minecraft на основе Prism',
    't.features': 'Возможности — Prism+', 't.download': 'Загрузка — Prism+',
    't.docs': 'Документация — Prism+', 't.changelog': 'Журнал изменений — Prism+', 't.about': 'О проекте — Prism+',

    'h.badge': 'Ранняя разработка', 'h.t1': 'Лаунчер Minecraft', 'h.t2': 'на основе Prism.',
    'h.sub': 'Prism+ — лаунчер сообщества на основе Prism Launcher. Он сохраняет привычный Prism и добавляет Менеджер локальных серверов и модуль Bedrock как отдельные модули в родном для Prism стиле.',
    'h.cta1': 'Скачать', 'h.cta2': 'Возможности', 'h.why': 'Почему Prism+',
    'h.c1t': 'Prism в основе', 'h.c1p': 'Проверенное управление экземплярами остаётся. Мы расширяем Prism, а не заменяем его.',
    'h.c2t': 'Модульная архитектура', 'h.c2p': 'Менеджер серверов и Bedrock живут в отдельных модулях, независимо от запуска Java.',
    'h.c3t': 'Безопасность по умолчанию', 'h.c3p': 'Возможность отката перед рискованными изменениями. Ваши экземпляры и данные не меняются без вашего ведома.',
    'h.stat': 'Статус проекта', 'h.s1': 'Этап 0 — фундамент: готово', 'h.s2': 'MVP серверов: в работе',
    'h.s3': 'Публичный релиз: ещё нет', 'h.more': 'Смотреть журнал изменений',

    'ft.title': 'Возможности',
    'ft.lead': 'Что Prism+ сохраняет от Prism и что добавляет. Метки показывают, на каком этапе находится каждый пункт.',
    'b.base': 'Основа', 'b.dev': 'В разработке', 'b.plan': 'Запланировано', 'b.rule': 'Принцип',
    'f1t': 'Фундамент Prism', 'f1p': 'Экземпляры, аккаунты, моды и привычный интерфейс Prism остаются нетронутыми.',
    'f2t': 'Менеджер локальных серверов', 'f2p': 'Создание и запуск локальных серверов Java и Bedrock: выбор версии и ядра, ОЗУ, свойства, консоль, логи, файлы, резервные копии.',
    'f3t': 'Связь сервера с экземпляром', 'f3p': 'Создание сервера из существующего экземпляра Java и раздельное управление клиентом и сервером. Исходный экземпляр не изменяется.',
    'f4t': 'Модуль Bedrock', 'f4p': 'Поиск установленной Bedrock, проверка совместимости платформы, показ версии и запуск средствами ОС — никогда через среду Java.',
    'f5t': 'Идеи из Nivora', 'f5p': 'Отдельные идеи Nivora Launcher, независимо реализованные на стеке Prism с уважением к лицензиям.',
    'f6t': 'Откат и сохранность данных', 'f6p': 'Возможность отката перед рискованными изменениями; пользовательские данные и экземпляры сохраняются.',
    'ft.note': 'Ничего из перечисленного не поставляется как заглушка: пункты появятся в релизах по мере готовности.',

    'd.title': 'Загрузка', 'd.lead': 'Prism+ находится на ранней стадии разработки, поэтому публичного релиза пока нет.',
    'd.nr': 'Загрузки пока недоступны',
    'd.nrp': 'Стабильные сборки появятся здесь и в GitHub Releases, когда будет готов первый релиз. Мы не выкладываем заглушки и фиктивные установщики.',
    'd.soon': 'Пока недоступно', 'd.src': 'Сборка из исходников',
    'd.srcp': 'Ссылки на исходники и руководства по сборке для каждой ОС появятся здесь по мере развития проекта.',
    'd.follow': 'Следить за разработкой на GitHub', 'd.alt': 'Нужен лаунчер прямо сейчас?',
    'd.altp': 'Prism Launcher — проект, на котором основан Prism+, — доступен на официальном сайте.',
    'd.altlink': 'Перейти на prismlauncher.org',

    'dc.title': 'Документация',
    'dc.lead': 'Документация растёт вместе с проектом. Подробные руководства запланированы на следующие этапы.',
    'dc.s1': 'Обзор', 'dc.s2': 'Этапы разработки', 'dc.s3': 'Принципы архитектуры', 'dc.s4': 'Сборка', 'dc.s5': 'Лицензирование',
    'dc.o.p': 'Prism+ — лаунчер Minecraft на основе Prism Launcher. Он сохраняет проверенные возможности и внешний вид Prism, а новые функции добавляет отдельными модулями.',
    'dc.st.p': 'Работа идёт по пяти этапам по порядку:',
    'dc.st1': 'Исследование', 'dc.st2': 'Архитектура', 'dc.st3': 'Реализация', 'dc.st4': 'Тестирование', 'dc.st5': 'Документация',
    'dc.st.n': 'Масштабные изменения начинаются только после завершения исследования.',
    'dc.a1': 'Prism остаётся основой; проверенные возможности сохраняются.',
    'dc.a2': 'Только C++ и Qt, в стиле кода Prism.',
    'dc.a3': 'Новые модули самостоятельны: свои реестры и каталоги данных, не наследуются от BaseInstance.',
    'dc.a4': 'Bedrock и Менеджер серверов отделены от логики запуска Java.',
    'dc.a5': 'Максимальная совместимость с upstream Prism и возможность отката перед рискованными изменениями.',
    'dc.b.p': 'Prism+ использует тот же инструментарий C++, Qt и CMake, что и Prism Launcher.',
    'dc.b.p2': 'Подробные руководства — BUILD, DEPENDENCIES, TROUBLESHOOTING и TESTING — запланированы, ссылки на них появятся здесь.',
    'dc.l.p': 'Лаунчер следует лицензированию GPL-3.0 своего upstream, а отдельный документ о происхождении фиксирует источник адаптированных идей. Этот сайт распространяется по лицензии MIT.',

    'c.title': 'Журнал изменений', 'c.lead': 'Вехи проекта на сегодня. Номера версий появятся с первым релизом.',
    'c.st.prog': 'В работе', 'c.st.done': 'Готово',
    'c1t': 'Сайт — первая версия', 'c1p': 'Первая версия этого сайта: шесть страниц, английский и русский языки, адаптивная вёрстка.',
    'c2t': 'MVP серверов — шаг 1', 'c2p': 'Профиль сервера и реестр серверов написаны как самостоятельный модуль. Тесты ещё впереди.',
    'c3t': 'Этап 0 — Фундамент', 'c3p': 'Каркас проекта, документы о происхождении и проверка сборки. Сборка и все 24 из 24 тестов прошли (тег plus-phase-0).',

    'a.title': 'О проекте', 'a.lead': 'Prism+ — лаунчер Minecraft от сообщества, разрабатываемый Minos_Team.',
    'a.m': 'Миссия',
    'a.mp': 'Сохранить то, за что любят Prism, и добавить то, чего не хватает игрокам и владельцам серверов, — без переписывания с нуля и без риска для чьих-либо данных.',
    'a.c': 'Благодарности', 'a.cp1': 'Prism Launcher — основа Prism+. Спасибо его авторам и участникам.',
    'a.cp2': 'Отдельные идеи Nivora Launcher независимо реализуются заново с уважением к его лицензии.',
    'a.i': 'Независимый проект', 'a.ip': 'Prism+ — независимый проект сообщества, а не официальный релиз Prism Launcher.',
    'a.l': 'Ссылки'
  };

  var root = document.documentElement;
  var textNodes = [].slice.call(document.querySelectorAll('[data-i18n]'));
  var ariaNodes = [].slice.call(document.querySelectorAll('[data-i18n-aria]'));
  var langButtons = [].slice.call(document.querySelectorAll('[data-lang]'));

  textNodes.forEach(function (n) { n.setAttribute('data-en', n.textContent); });
  ariaNodes.forEach(function (n) { n.setAttribute('data-en-aria', n.getAttribute('aria-label') || ''); });

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(l) { try { localStorage.setItem(KEY, l); } catch (e) { /* storage blocked */ } }

  function apply(lang) {
    root.lang = lang;
    textNodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      n.textContent = (lang === 'ru' && RU[k]) ? RU[k] : n.getAttribute('data-en');
    });
    ariaNodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n-aria');
      n.setAttribute('aria-label', (lang === 'ru' && RU[k]) ? RU[k] : n.getAttribute('data-en-aria'));
    });
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  var param = null;
  try { param = new URLSearchParams(location.search).get('lang'); } catch (e) { /* old browser */ }
  var initial = param || read() || ((navigator.language || '').slice(0, 2) === 'ru' ? 'ru' : 'en');
  apply(initial === 'ru' ? 'ru' : 'en');

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang');
      write(l);
      apply(l);
    });
  });

  // mobile menu
  var header = document.querySelector('header.site');
  var toggle = document.querySelector('.menu');
  function setOpen(o) {
    header.classList.toggle('open', o);
    toggle.setAttribute('aria-expanded', String(o));
  }
  toggle.addEventListener('click', function () { setOpen(!header.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  [].slice.call(document.querySelectorAll('nav.main a')).forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
})();
