<template>
  <div class="navbar">
    <div class="logoContainer" v-on:click="scrollToTop">
      <logo />
    </div>
    <div class="p small">
      <svg width="3px" height="48px" viewBox="0 0 3 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="homepage" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-378.000000, -29.000000)"
          stroke-dasharray="5" stroke-linecap="round">
          <path d="M379.5,30.5 L379.5,77.5" id="Line" stroke="#082842" stroke-width="2"></path>
        </g>
      </svg>
      <b>Los Angeles</b>
      <br /> Nov 13 & 14, 2018
    </div>
    <div class="button" v-on:click="scrollToForm">
      <div>
        Stay Updated
      </div>
    </div>
  </div>
</template>

<script>
  import SmoothScroll from 'smooth-scroll'
  import logo from './logo'

  export default {
    components: {
      logo
    },
    methods: {
      scrollToForm() {
        var scroll = new SmoothScroll();
        scroll.animateScroll(document.querySelector('.formScroll'));
      },
      scrollToTop() {
        var scroll = new SmoothScroll();
        scroll.animateScroll(0);
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../scss/colors';
  @import '../scss/variables';

  .navbar {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 108px;
    background: $off-white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    @media screen and (max-width: $mobile-max) {
      height: 60px;
    }
  }

  .logoContainer,
  .p.small {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .logoContainer {
    cursor: pointer;
    margin-left: 24px;
    @media screen and (max-width: $mobile-max) {
      margin-left: 0px;
      width: 50%;
      text-align: center;
    }
  }

  .p.small {
    margin-left: calc(25% + 24px);
    >svg {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: -4px;
      margin-left: -12px;
    }
    @media screen and (max-width: $mobile-max) {
      display: none;
    }
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;
    color: $white;
    background: $off-black;
    cursor: pointer;
    width: calc(100% * (3/12) - 6px);
    height: 100%;
    text-align: center;
    >div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    @media screen and (max-width: $tablet-max) {
      width: calc(100% * (5/12));
    }
    @media screen and (max-width: $mobile-max) {
      width: 50%;
    }


    // rollover state

    &::after {
      content: 'stay updated';
      position: absolute;
      text-align: center;
      top: 50%;
      left: 0;
      width: 100%;
      text-transform: uppercase;
      transform: translateY(-50%);
      z-index: 2;
      transition-delay: 0.4s;
      opacity: 0;
    }

    &::before {
      position: absolute;
      content: ' ';
      top: 0;
      right: 0;
      width: 0%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
      transition: all 0.4s ease-in-out;
      transform-origin: 100% 50% !important;
    }


    &:hover {
      &::before {
        right: initial;
        left: 0;
        width: 100%;
      }
      &::after {
        opacity: 1;
        transition-delay: 0s;
      }
    }

    //
  }



</style>
