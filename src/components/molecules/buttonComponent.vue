<template>
  <div class="button" :class="[lightClass]" :data-text="text" @click="openUrl(url)" >
    <div>{{text}}</div>
  </div>
</template>

<script>
import openUrl from '../mixins/openUrl'
export default {
  props: ['text', 'light'],
  mixins: [openUrl],
  computed: {
    lightClass () {
      return {
        'button--light': this.light
      }
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
    box-sizing: border-box;
    color: $white;
    background: $off-black;
    cursor: pointer;
    width: 100%;
    text-align: center;
    max-width: 200px;
    border-radius: 100px;
    overflow: hidden;
    height: 48px;
    >div {
      @include vert-center;
    }
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
      transition-delay: 0.2s;
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
    &--light {
      color: $off-black;
      background: $white;
      border: 4px solid $off-black;
      &::before {
        background: $off-black;
      }
      &::after {
        color: $white;
      }
    }
    &:hover {
      &::before {
        right: initial;
        left: 0;
        width: 100%;
      }
      &::after {
        opacity: 1;
      }
    }
  }

</style>
