<template>
  <div class="carousel-arrow">
    <component :is="arrow" />
  </div>
</template>

<script>
  import arrowLeft from '../../assets/SVG/arrowLeft'
  import arrowRight from '../../assets/SVG/arrowRight'

  export default {
    props: ['direction'],
    computed: {
      arrow () {
        if (!this.direction || this.direction !== 'right') return 'arrowLeft'
        return 'arrowRight'
      }
    },
    components: {
      arrowLeft,
      arrowRight
    }
  }
</script>

<style scoped lang="scss">
  @import '../../scss/colors';
  @import '../../scss/mixins';
  
  .carousel-arrow {
    position: relative;
    width: 18px;
    height: 18px;
    background: rgba(255, 0, 0, 0.15);
    cursor: pointer;
    >svg {
      @include absolute-full;
    }
  }
</style>
