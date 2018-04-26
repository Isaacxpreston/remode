<template>
  <div class="row row--full testimonials">

    <!-- videos carousel -->
    <div class="col-lg-6 col-lg-offset-1 testimonials__videos">
      <div class="testimonials__videos-swiper">


        <div class="swiper-container">
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
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
          <!-- Add Arrows -->
          <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
        </div>


        <!-- <videoCard /> -->
        <div class="testimonials__videos-swiper__controls">
          

          <div class="swiper-pagination--video"></div>
<!--           
          <carouselDot />
          <carouselDot />
          <carouselDot />
          <carouselDot /> -->

          <div class="swiper-left">
            <carouselArrow direction="left" />
          </div>
          <div class="swiper-right">
            <carouselArrow direction="right" />
          </div>

        </div>
      </div>
    </div>

    <!-- testimonials carousel -->
    <div class="col-lg-4 col-lg-offset-1">
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
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        // loop: true,
      pagination: {
        el: '.swiper-pagination--video',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + ' carousel-dot"></div>';
        },
      },
        navigation: {
          nextEl: '.swiper-right',
          prevEl: '.swiper-left',
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
      // display: none;
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
  }

  .testimonials__videos-swiper {
    position: relative;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
  }

  .testimonials__videos-swiper__controls {
    position: relative;
    width: 100%;
    margin-top: 24px;
    background: rgba(255, 0, 0, 0.15);
  }

</style>
