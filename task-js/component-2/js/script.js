(function () {
  /* Код компонента пишите здесь */
  const form = document.getElementById('booking-form');
  const inputPhone = document.getElementById('phone');
  const inputCheckin = document.getElementById('checkin-date');
  const inputCheckout = document.getElementById('checkout-date');
  const inputAdults = document.getElementById('adults');
  const inputChildren = document.getElementById('children');

  function errorInput(input) {
    input.classList.remove('field-correct');
    input.classList.add('field-error');
    return
  }

  function goodInput(input) {
    input.classList.remove('field-error');
    input.classList.add('field-correct');
    return
  }

  // проверка телефона
  function checkPhone() {
    // поле не пустое
    if (!inputPhone.value) {
      console.log('номер не должен быть пустым')
      errorInput(inputPhone);
      return
    }
    // поле начинается с +7
    if (!inputPhone.value.startsWith('+7')) {
      console.log('номер должен начинаться с +7')
      errorInput(inputPhone);
      return
    }
    const allowedSymbols = ['(', ')', '-', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let numbersCount = 0;
    let countErrors = 0;
    inputPhone.value.slice(2).split('').forEach(symbol => {
      if (!allowedSymbols.includes(symbol)) {
        countErrors++
      }
      if (numbers.includes(symbol)) { numbersCount++ }
    });
    // есть только разрешенные символы
    if (countErrors > 0) {
      console.log('в номере недопустимые символы')
      errorInput(inputPhone);
      return
    }
    // есть 10 цифр после +7
    if (numbersCount !== 10) {
      console.log('в номере должно быть 10 цифр после +7')
      errorInput(inputPhone);
      return
    }
    // тогда все хорошо
    goodInput(inputPhone);
  }


  // проверка дат
  function checkDate() {
    // Даты не пустые
    if (!inputCheckin.value || !inputCheckout.value) {
      inputCheckin.classList.add('field-error');
      console.log('поля дат должны быть не пустые')
      errorInput(inputCheckin);
      errorInput(inputCheckout);
      return
    }

    // Даты должны быть в формате ГГГГ-ММ-ДД или ДД.ММ.ГГГГ
    function makeDate(dateString) {
      let date = NaN;
      let regex1 = /(\d{4}-\d{2}-\d{2})/gm;
      let regex2 = /(\d{2}\.\d{2}\.\d{4})/gm;
      if (regex1.test(dateString)) {
        date = new Date(dateString)
      } else if (regex2.test(dateString)) {
        const [dd, mm, yyyy] = dateString.split('.');
        date = new Date(`${yyyy}-${mm}-${dd}`);
      } else {
        console.log('дата должна быть в формате ГГГГ-ММ-ДД или ДД.ММ.ГГГГ')
      }
      return date
    }

    // Даты должны быть валидные
    const checkInDate = makeDate(inputCheckin.value.trim());
    const checkOutDate = makeDate(inputCheckout.value.trim());

    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      console.log('такой даты не существует, дата должна быть в формате ГГГГ-ММ-ДД или ДД.ММ.ГГГГ');
      errorInput(inputCheckin);
      errorInput(inputCheckout);
      return
    }

    // Дата выезда должна быть больше даты заезда минимум на 4 дня
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    // console.log('daysDifference:', daysDifference);
    if (daysDifference < 4) {
      console.log('Дата выезда должна быть больше даты заезда минимум на 4 дня.')
      errorInput(inputCheckin);
      errorInput(inputCheckout);
      return
    }
    goodInput(inputCheckin);
    goodInput(inputCheckout);
  }

  // проверка людей
  function checkPeople() {

    // количество взрослых должно быть хотя бы 1. 
    if (!inputAdults.value || parseInt(inputAdults.value) < 1) {
      console.log('Количество взрослых должно быть хотя бы 1.')
      errorInput(inputAdults);
      errorInput(inputChildren);
      return
    }

    // количество детей не может быть больше количества взрослых.
    if (parseInt(inputChildren.value) > parseInt(inputAdults.value)) {
      console.log('Количество детей не может быть больше количества взрослых.')
      errorInput(inputAdults);
      errorInput(inputChildren);
      return
    }

    // если выбран одноместный номер, количество взрослых не может превышать 1.
    if (document.getElementById('radio-1').checked) {
      if (parseInt(inputAdults.value) > 1) {
        console.log('Если выбран одноместный номер, количество взрослых не может превышать 1.')
        errorInput(inputAdults);
        errorInput(inputChildren);
        return
      }
    }

    //Если выбран семейный номер, количество взрослых должно быть 2 или
    // более, а количество детей — хотя бы 1. 
    if (document.getElementById('radio-3').checked) {
      if (!(parseInt(inputAdults.value) >= 2 && parseInt(inputChildren.value) >= 1)) {
        console.log('Если выбран семейный номер, количество взрослых должно быть 2 или более, а количество детей — хотя бы 1')
        errorInput(inputAdults);
        errorInput(inputChildren);
        return
      }
    }

    goodInput(inputAdults);
    goodInput(inputChildren);
  }

  // главная функция-обработчик
  function checkInputValidity() {
    checkPhone();
    checkDate();
    checkPeople();
  }

  form.addEventListener('submit', (e) => {
    console.log('hi');
    e.preventDefault();
    checkInputValidity();
  })

  form.submit();
})();

// console.log('form:', form);
// const formInput = document.querySelector('.field-input');
// console.log('formInput:', formInput);
// const formInputs = document.querySelectorAll('.field-input');
// console.log('formInputs:', formInputs);
// const phoneInput = form.querySelectorById('#phone');
// const inputList = Array.from(document.querySelectorAll('.field-input'));
// console.log('inputList:', inputList);
// const phone = inputPhone.value;

// function setEventListeners() {
// inputList.forEach(formInputs) {
//   formInputs.addEventListener("input", () => {
//     checkInputValidity(formInputs);
//   });
// }

// inputList.forEach((formInput) => {
//   console.log('formInput', formInput);
//   inputList.addEventListener('input', checkInputValidity());
// })

// inputList.forEach(function (formInput) {
//   checkInputValidity(formInput)
// inputList.addEventListener('input', checkInputValidity());
// });

// inputDate.addEventListener('input', checkInputValidity)

// const inputValue = formInput.value;
// inputList.map(inputValue => inputValue.value)
// inputList.forEach(formInput)
// console.log('inputList:', inputList);
// if (!inputList.validity.valid) {
// if (!inputValue.validity.valid) {
// if (!inputList.value) {
// if (!inputDate.value || phone || date) {
// if (!inputPhone.value) {
// console.log('inputInput.value:', inputValue);
// formInput.classList.add('field-error');
// inputList.classList.add('field-error');
// form.classList.add('field-error');
// } else {
// inputList.classList.remove('field-error');
// form.classList.remove('field-error');
//   formInput.classList.remove('field-error');
// }