<template>
  <div class="navbar">
    <div class="logoContainer">
      <logo />
    </div>
    <div class="p small">
        Los Angeles<br />
        Nov 13 & 14, 2018
    </div>
    <div class="button">
      <div>
        Stay Updated
      </div>
    </div>
  </div>
</template>

<script>
  import logo from './logo'
  export default {
    components: {
      logo
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
    @media screen and (max-width: $mobile-max) {
      height: 60px;
    }
  }

  .logoContainer, .p.small {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .logoContainer {
    margin-left: 24px;
    @media screen and (max-width: $mobile-max) {
      margin-left: 0px;
      width: 50%;
      text-align: center;
    }
  }

  .p.small {
    margin-left: calc(25% + 24px);
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
    width: calc(100% * (3/12));
    height: 100%;
    text-align: center;
    >div {
      position :relative;
      top: 50%;
      transform: translateY(-50%);
    }
    @media screen and (max-width: $tablet-max) {
      width: calc(100% * (5/12));
    }
    @media screen and (max-width: $mobile-max) {
      width: 50%;
    }
  }
</style>
