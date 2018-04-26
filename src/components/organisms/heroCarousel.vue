<template>
  <div>

    <!-- hero carousel -->  
    <heroSlide v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
      {{slide.text}}
    </heroSlide>

    <!-- controls + clock -->
    <div class="row row--full carousel-controls-row">
      <div class="col-lg-2 col-xs-12 col-lg-offset-5 carousel-dot-container">
        <!-- todo: toggle active class -->
        <div class="carousel-dot" v-for="(slide, index) in slides" :key="index" @click="showSlide(index)"></div>
      </div>
      <div class="col-lg-3 col-xs-12 col-lg-offset-2">
        <p class="text-right">clock will go here</p>
      </div>
    </div>

  </div>
</template>

<script>
  import heroSlide from './heroSlide'

  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [{
            text: 'The Premier Event for Disruptive and Sustainable Fashion'
          },
          {
            text: 'this is the second slide'
          },
          {
            text: 'this is the THIRD slide'
          },
          {
            text: 'this is the fourth/LAST slide'
          }
        ]
      }
    },
    methods: {
      showSlide(index) {
        this.currentSlide = index
      }
    },
    mounted() {},
    components: {
      heroSlide
    }
  }

</script>


<style scoped lang="scss">
  @import '../../scss/variables';

  .row {
    position: relative;
    width: calc(100% - 24px);
    margin: auto;
    background: rgba(255, 0, 0, 0.15); // margin: 0px;
    >div {
      background: rgba(255, 0, 0, 0.15);
    }
  }

  .slide-button {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 12px;
    background: rgba(255, 0, 0, 0.25);
    color: white;
    cursor: pointer;
  }

  .carousel-controls-row {
    padding-top: 24px;
    @media screen and (max-width: $tablet-max) {
      padding-top: 36px;
    }
  }

  .carousel-dot-container {
    position: relative;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
    display: flex;
    justify-content: center;
  }

</style>
