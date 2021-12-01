// получение оставшегося времени
function getLeftTime(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  // создание таймера
  function CreateTimer(id, date_needed) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    // обновление времени
    function updateTime() {
      var time = getLeftTime(date_needed);
   
      daysSpan.innerHTML = time.days;
      hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
   
      if (time.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateTime();
    var timeinterval = setInterval(updateTime, 1000);
  }
   
  var date_needed = '2021-12-31';
  CreateTimer('countdown', date_needed);