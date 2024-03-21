(function () {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue('tabs_limit') || 0,
  };

  const accordeonEl = document.querySelector('.accordeon');
  const accordeonTitles = accordeonEl.querySelectorAll('.accordeon-item-title');
  const accordeonItems = accordeonEl.querySelectorAll('.accordeon-item');
  const n = accordeonTitles.length;
  for (let i = 0; i < n; i += 1) {
    accordeonTitles[i].dataset.titleid = i
  }
  let opened = [];

  function processClick(e) {
    if (!e.target.className === 'accordeon-item-title') { return }
    const el = e.target;
    const titleid = parseInt(el.dataset.titleid);

    if (opened.includes(titleid)) {
      opened = opened.filter(open => open !== titleid);
      updateView()
      return
    }

    if (opened.length < settings.tabsLimit || settings.tabsLimit === 0) {
      opened.push(titleid);
    } else {
      opened.push(titleid);
      opened.shift();
    }
    updateView()
  }

  function updateView() {
    for (let i = 0; i < n; i += 1) {
      const item = accordeonItems[i];
      if (opened.includes(i)) {
        item.classList.add('accordeon-item--open')
      } else {
        item.classList.remove('accordeon-item--open')
      }
    }
  }

  accordeonEl.addEventListener('click', processClick)

})();
