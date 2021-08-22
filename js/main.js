$(document).ready(function () {
  var currentFloor = 2; // Переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); // Каждый отдельный этаж в SVG
  var counterUp = $('.counter-up');
	var counterDown  = $('.counter-down');
	var modal = $('.modal');
	var modalCloseButton = $('.modal-close-button');
	var viewFlatsButton = $('.view-flats');

	// Функция при наведении мышкой на этаж
  floorPath.on('mouseover', function () {
		floorPath.removeClass('current-floor'); // Удаляем активный класс у этажа
    currentFloor = $(this).attr('data-floor'); // Получаем значение текущего этажа
    $('.counter').text(currentFloor); // Записывем значение этажа в счетчик справа
  });

	floorPath.on('click', toggleModal); // При клике на этаж, вызвать окно
	modalCloseButton.on('click', toggleModal); // Клик на кнопку закрыть, убирает окно
	viewFlatsButton.on('click', toggleModal);

  counterUp.on('click', function () { // Отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // Проверяем значение этажа
      currentFloor++; // Прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false }); // Форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor); // Записывем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // Удаляем активный класс у этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // Подсвечиваем текущий этаж
    }
  });

	counterDown.on('click', function () { // Отслеживаем клик по кнопке вниз
		if (currentFloor > 2) { // Проверяем значение этажа
			currentFloor--; // Убавляем один этаж
			usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false }); // Форматируем переменную с этажом, чтобы было 01, а не 1
			$('.counter').text(usCurrentFloor); // Записывем значение этажа в счетчик справа
			floorPath.removeClass('current-floor'); // Удаляем активный класс у этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // Подсвечиваем текущий этаж
		}
	});
	function toggleModal() { // Функция открыть-закрыть окно
		modal.toggleClass('is-open');
	}
});