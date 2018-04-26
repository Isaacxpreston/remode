<template>
  <div class="row row--full testimonials">

    <!-- videos -->
    <div class="col-lg-6 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 testimonials__videos">

      <div class="videos-swiper">
        
        <!-- cards -->
        <div class="swiper-container videos-swiper__container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <videoCard />
            </div>
            <div class="swiper-slide">
              <videoCard />
            </div>
            <div class="swiper-slide">
              <videoCard />
            </div>
            <div class="swiper-slide">
              <videoCard />
            </div>
          </div>
        </div>

        <!-- controls -->
        <div class="videos-swiper__controls">
          <div class="videos-swiper__pagination"></div>

          <div class="videos-swiper__arrows hide-tablet hide-mobile">
            <div class="videos-swiper__previous">
              <carouselArrow direction="left" />
            </div>
            <div class="videos-swiper__next">
              <carouselArrow direction="right" />
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- testimonials -->
    <div class="col-lg-4 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 ">
      <div class="testimonials__card-container">
        <testimonialCard />
      </div>
      <div class="testimonials__card-container">
        <testimonialCard />
      </div>
      <div class="testimonials__card-container">
        <testimonialCard />
      </div>
    </div>

  </div>
</template>

<script>
  import carouselDot from '../atoms/carouselDot'
  import carouselArrow from '../atoms/carouselArrow'

  import testimonialCard from '../molecules/testimonialCard'
  import videoCard from '../molecules/videoCard'

  import Swiper from 'Swiper'

  export default {
    data () {
      return {
        swiper: null,

      }
    },
    mounted() {

      // todo: add unique classes on container and controls to allow multiple instances of testimonial component on one page
      // ie .videos-swiper__container[data-instance="some unique alphanumeric string here"]
      // similar to style scoping on components

      this.swiper = new Swiper('.videos-swiper__container', {
        slidesPerView: 1,
        spaceBetween: 30,
        // loop: true,
      pagination: {
        el: '.videos-swiper__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + ' carousel-dot"></div>';
        },
      },
        navigation: {
          nextEl: '.videos-swiper__next',
          prevEl: '.videos-swiper__previous',
        },
      });
    },
    components: {
      carouselDot,
      carouselArrow,
      testimonialCard,
      videoCard
    }
  }

</script>

<style scoped lang="scss">
  //110 110, 48 48 padding container
  @import '../../scss/variables';
  @import '../../scss/mixins';

  .testimonials {
    background: rgba(255, 0, 0, 0.15);
    padding: 110px 0px;
    @media screen and (max-width: $tablet-max) {
      padding: 48px 0px;
    }
  }

  .testimonials__card-container {
    position: relative;
    width: 100%;
    margin: 24px 0px;
    &:nth-child(even) {
      transform: translateX(-20%);
    }
    @media screen and (max-width: $tablet-max) {
      &:nth-child(even) {
        transform: none;
      }
    }
  }

  .testimonials__videos {
    @include center-flex;
    overflow: hidden;
  }

  .videos-swiper {
    position: relative;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
  }

  .videos-swiper__controls {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    background: rgba(255, 0, 0, 0.15);
    @media screen and (max-width: $tablet-max) {
      justify-content: center;
    }
  }

  .videos-swiper__previous, .videos-swiper__next {
    user-select: none;
    outline: 0;
    &.swiper-button-disabled {
      opacity: 0.4;
    }
  }

  .videos-swiper__arrows {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 72px;
    background: rgba(255, 0, 0, 0.15);
  }

</style>
