<template>
  <div class="navbar">

    <!-- <div>dlc etc</div> -->

    <div class="logoContainer" v-on:click="scrollToTop">
      <logoWithText />
    </div>
    
    <div class="button" v-on:click="scrollToForm" data-title="stay updated">
      <div>
        Stay Updated
      </div>
    </div>
    <div class="bottomBar" :style="{ 'background-image': 'url(' + bottomBarSVG + ')' }">
      <div class="p">{{bannerText}}</div>
    </div>
  </div>
</template>

<script>
  import SmoothScroll from 'smooth-scroll'
  import logo from './logo'
  import logoWithText from './logoWithText'
  import bottomBarSVG from '../assets/SVG/bottomBar.svg'

  export default {
    props: ['bannerText'],
    data () {
      return {
        bottomBarSVG
      }
    },
    components: {
      logo,
      logoWithText
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
    height: 120px;
    background: $off-white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  }

  .logoContainer {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    margin-left: 24px;
    margin-top: 12px;
    height: calc(100% - 24px - 36px);
    > svg {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 680px) {
      margin-left: 12px;
      margin-top: 21px;
      width: calc(50% - 24px);
      text-align: center;
    }
  }

  .bottomBar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 36px;
    width: 100%;
    background-color: $off-black;
    background-repeat: no-repeat;
    @media screen and (max-width: 680px) {
      height: 18px;
      background-size: cover;
      background-position: -24px 0px;
    }
    >.p {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      color: $white;
      text-align: right;
      margin-right: 10%;
      font-family: 'GTWalsheimMedium';
      @media screen and (max-width: $tablet-max) {
        display: none;
      }
    }
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 12px;
    margin-right: 24px;
    color: $white;
    background: $off-black;
    cursor: pointer;
    width: calc(100% * (3/12) - 6px - 24px);
    height: calc(100% - 24px - 36px);
    text-align: center;
    max-width: 200px;
    // new
    border-radius: 100px;
    overflow: hidden;
    >div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    @media screen and (max-width: $tablet-max) {
      width: calc(100% * (5/12) - 24px);
    }
    @media screen and (max-width: 680px) {
      width: calc(50% - 24px);
      margin-right: 12px;
      margin-top: 21px;
    }


    // rollover state

    &::after {
      content: attr(data-title); // 'stay updated';
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
