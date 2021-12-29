$(() => {
// Переменные для main
  let currentFloor = 2
  let counterSpan = $(".count__pick-counter")
  let floorPath = $(".flats path")

  let arrowUp = $(".count__pick-arrow--up")
  let arrowDown = $(".count__pick-arrow--down")

// Пееременные для modal
  let modalWindow = $('.modal')
  let modalCounter = $('.modal__floor-counter')
  let btnFlats = $('.btn-flats')
  let modalBtnClose = $('.modal__exit')
  let flatsPath = $('.modal__floor-floor path')
  let linksPath = $('.modal__picker-list a')
  let currentFlat = 2
  let currentLink = 2



// // Настройка main
  function changeBtnFlat() {
    let usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    })

    counterSpan.text(usCurrentFloor)
    floorPath.removeClass('current-floor')
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
  }
  
// Начальное значение счетчика
  counterSpan.text(currentFloor.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
}))

// Изменение текста
  floorPath.on("mousemove", function () {
    floorPath.removeClass('current-floor')
    currentFloor = $(this).attr('data-floor')
    counterSpan.text(currentFloor)
  })


// Настройка стрелок
  arrowUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++
      changeBtnFlat()
    }
  })

  arrowDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--
      changeBtnFlat()
    }
  })

// // Настройка modal
  // Кнопки отрытия и закрытия модального окна
  btnFlats.on('click', function() {
    modalWindow.css('display', 'block')
    modalCounter.text(Number(currentFloor))
  })

  modalBtnClose.on('click', function () {
    modalWindow.css('display', 'none')
  })
  // Добавление и удаление классов к ссылкам
  flatsPath.on('mousemove', function() {
    currentFlat = $(this).attr('data-flat')
    linksPath.removeClass('modal__current-link')
    $(linksPath[currentFlat - 1]).addClass('modal__current-link')
  })

  flatsPath.on('mouseleave', function() {
    $(linksPath[currentFlat - 1]).removeClass('modal__current-link')
  })
  // Добавление и удаление классов к svg
  linksPath.on('mousemove', function() {
    currentLink = linksPath.index(this) + 1
    flatsPath.removeClass('current-flat')
    $(`[data-flat="${currentLink}"]`).toggleClass('current-flat')
  })

  linksPath.on('mouseleave', function() {
    $(`[data-flat="${currentLink}"]`).removeClass('current-flat')
  })
})
