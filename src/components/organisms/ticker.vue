<template>
  <div class="row row--full ticker">
    <div class="ticker__rotate">
      <div class="ticker__item" v-for="(item, index) in tickerItems" :key="index">
        <h5>item {{index}}</h5>
      </div>
      <div class="ticker__item" v-for="(item, index) in tickerItems" :key="index">
        <h5>item {{index}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tickerItems: new Array(50)
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
  }
  
  .ticker__rotate {
    @include center-flex;

    justify-content: left;
    animation: ticker-animation 60s linear infinite;
  }

  .ticker__item {
    position: relative;
    margin: 0px 24px;
    background: rgba(255, 0, 0, 0.15);
  }

</style>
