<template>
  <div class="row row--full ticker" :class="typeClass">
    <div class="ticker__rotate" v-if="type !== 'text'">
      <div class="ticker__asset" v-for="(item, index) in tickerItems" :key="index">
        <h5>item {{index}}</h5>
      </div>
      <div class="ticker__asset" v-for="(item, index) in tickerItems" :key="index + '-copy'">
        <h5>item {{index}}</h5>
      </div>
    </div>
    <div class="ticker__rotate ticker__rotate--text" v-else>
      <div class="ticker__text" v-for="(item, index) in tickerTextItems" :key="index">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ({{index}})</p>
      </div>
      <div class="ticker__text" v-for="(item, index) in tickerTextItems" :key="index + '-copy'">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ({{index}})</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['type'],
    data() {
      return {
        tickerItems: new Array(50),
        tickerTextItems: new Array(50)
      }
    },
    computed: {
      typeClass () {
        return this.type === 'text' ? 'ticker--text' : ''
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/variables';
  @import '../../scss/mixins';

  @keyframes ticker-animation {
    from {
      transform: translate(0%)
    }
    to {
      transform: translate(-50%)
    }
  }

  .ticker {
    overflow: hidden;
    background: rgba(255, 0, 0, 0.15);
    height: 84px; // 10vh;
    &.ticker--text {
      height: 60px;
    }
  }
  
  .ticker__rotate {
    @include center-flex;
    justify-content: left;
    animation: ticker-animation 80s linear infinite;
    &.ticker__rotate--text {
      animation: ticker-animation 300s linear infinite !important;
    }
  }

  .ticker__asset {
    position: relative;
    margin: 0px 24px;
    background: rgba(255, 0, 0, 0.15);
  }

  .ticker__text {
    position: relative;
    background: rgba(255, 0, 0, 0.15);
    // height: 24px;
    min-width: 500px;
    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      height: 200px;
      width: 10px;
      background: rgba(255, 0, 0, 0.5);
      transform: translate(-48px, -50%) rotate(-40deg);
    }
  }

</style>
