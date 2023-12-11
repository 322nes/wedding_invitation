const year = 2024;
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');


// Расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`Sep 09 2024 00:00:00`);

function whatNy() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;
  
  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};

setInterval(whatNy, 1000);




//////////////////////////////////////////////////////////////////////////////////////

const center = [55.87572521856528, 37.436384970775734];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15
  });

let placemark = new ymaps.Placemark(center, {}, {

})

  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}

ymaps.ready(init);