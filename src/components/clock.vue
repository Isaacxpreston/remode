<template>
  <div id="clockdiv">
    <div>
      <div class="days h2"></div>
      <div class="utility">Days</div>
    </div>
    <div>
      <div class="hours h2"></div>
      <div class="utility">Hours</div>
    </div>
    <div>
      <div class="minutes h2"></div>
      <div class="utility">Minutes</div>
    </div>
    <div>
      <div class="seconds h2"></div>
      <div class="utility">Seconds</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '../scss/global';
  #clockdiv {
    position: relative;
    display: flex;
    padding-top: 48px;
    >div {
      position: relative;
      .h2,
      .utility {
        color: $white;
      }
      margin-right: 96px;
      &:not(:last-child) {
        &:after {
          position: absolute;
          content: ' ';
          height: 6px;
          width: 6px;
          top: 50%;
          right: 0;
          transform: translate(48px, -50%);
          background: $white;
          border-radius: 50%;
        }
      }
    }
    @media screen and (max-width: $tablet-max) {
      >div {
        margin-right: 48px;
        &:after {
          transform: translate(24px, -50%) !important;
        }
      }
    }
    @media screen and (max-width: $mobile-max) {
      justify-content: space-between;
      >div {
        margin-right: 0px;
      }
    }
  }

</style>


<script>
  // https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  // https://codepen.io/SitePoint/pen/MwNPVq

  export default {
    mounted() {
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          var t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }

      var deadline = new Date('November 13 2018');
      initializeClock('clockdiv', deadline);
    }
  }

</script>
