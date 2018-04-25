<template>
  <div class="button" :data-text="text" @click="openUrl(url)" >
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'url'],
  // todo: add nav method
  methods: {
    openUrl (url) {
      if (url) window.open(url, '_blank')
    }
  }
}
</script>


<style scoped lang="scss">
  @import '../../scss/variables';
  @import '../../scss/colors';
  @import '../../scss/mixins';

  .button {
    position: relative;
    color: $white;
    background: $off-black;
    cursor: pointer;
    width: calc(100% * (3/12) - 6px - 24px);
    height: calc(100% - 24px - 36px);
    text-align: center;
    max-width: 200px;
    border-radius: 100px;
    overflow: hidden;
    height: 48px;
    >div {
      @include vert-center;
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
      content: attr(data-text);
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
  }

</style>
