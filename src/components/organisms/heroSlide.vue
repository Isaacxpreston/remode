<template>
  <div class="row hero-row row--full">
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 hero-row__content">
      <h1 class="bold"><slot></slot></h1>
      <h3 class="bold">Fashion is changing for the better. </h3>
      <p>REMODE is a vertical-focused fashion event offering innovative solutions to disruption, from the yarn to the final
        customer.
      </p>
      <buttonComponent text="get your pass" url="http://google.com" light="true" />
    </div>
    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <speakerCard />
    </div>
    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 ">
      <speakerCard />
    </div>
    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 ">
      <speakerCard />
    </div>
    <div class="col-xs-12 hide-desktop hero-row__cta-mobile">
      <buttonComponent text="get your pass" url="http://google.com" light="true" />
    </div>
  </div>
</template>

<script>
  import buttonComponent from '../atoms/buttonComponent'
  import speakerCard from '../molecules/speakerCard'

  export default {
    components: {
      buttonComponent,
      speakerCard,
    }
  }

</script>



<style scoped lang="scss">
  @import '../../scss/variables';
  
  .hero-row {
    // padding-top is whitespace from nav to content
    // todo: move one layer up, as .hero-row will be a nested slider
    padding-top: 72px;
    @media screen and (max-width: $tablet-max) {
      padding-top: 48px;
    }
  }

  .hero-row__content {
    >h1,
    >h3 {
      margin-bottom: 12px
    }
    >h1 {
      @media screen and (max-width: $tablet-max) {
        margin-bottom: 36px;
      }
    }
    >p {
      margin-bottom: 24px;
      @media screen and (max-width: $tablet-max) {
        margin-bottom: 36px;
      }
    }
    >.button {
      @media screen and (max-width: $tablet-max) {
        display: none;
      }
    }
  }

  .hero-row__cta-mobile {
    padding-top: 36px;
    >.button {
      margin: auto;
    }
  }

</style>
