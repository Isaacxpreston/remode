<template>
  <div class="row row--full testimonials">

    <!-- video col -->
    <!-- video carousel -->
    <!--  -->

    <!-- testimonials col -->
    <!-- rotating cards -->
    <!--  -->

    <div class="col-lg-6 col-lg-offset-1">
      <h2>videos</h2>
    </div>

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
  import testimonialCard from '../molecules/testimonialCard'

  export default {
    components: {
      testimonialCard
    }
  }

</script>

<style scoped lang="scss">
  //110 110, 48 48 padding container
  @import '../../scss/variables';

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

</style>
