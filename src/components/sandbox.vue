<template>
  <div>

    <!-- modules -->

    <p> hero carousel </p>

    <heroCarousel />

    <p>heavy text</p>

    <heavyText />

    <p>split text</p>

    <splitText />

    <p>testimonials</p>

    <testimonials />

    <p>news</p>

    <news />

    <p>pillars</p>

    <pillars />

    <p>tickers</p>

    <ticker />

    <!-- components -->

    <div class="sandbox-container" style="display: none">

      <h1>atoms sandbox</h1>

      <buttonComponent text="button dark" url="http://google.com" />

      <br />

      <buttonComponent text="button light" url="http://google.com" light="true" />

      <br />

      <p> session card </p>

      <!-- <sessionCard /> -->

      <p>testimonial card</p>

      <testimonialCard />

      <p>video card</p>

      <!-- <videoCard /> -->

      <p>news card</p>

      <!-- newsCard -->

      <p>speaker card</p>

      <speakerCard />

    </div>

  </div>
</template>

<script>
  import swiper from 'Swiper'

  import imageComponent from './atoms/imageComponent'
  import iconComponent from './atoms/iconComponent'
  import buttonComponent from './atoms/buttonComponent'

  import speakerCard from './molecules/speakerCard'
  import testimonialCard from './molecules/testimonialCard'

  import heroCarousel from './organisms/heroCarousel'
  import heavyText from './organisms/heavyText'
  import splitText from './organisms/splitText'
  import pillars from './organisms/pillars'
  import testimonials from './organisms/testimonials'
  import news from './organisms/news'
  import ticker from './organisms/ticker'

  export default {

    components: {
      imageComponent,
      buttonComponent,
      iconComponent,
      speakerCard,
      testimonialCard,
      heroCarousel,
      heavyText,
      splitText,
      pillars,
      testimonials,
      news,
      ticker
    }
  }

</script>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/variables';


  .col-content {
    position: relative;
    margin: auto;
    width: 100%; // width: calc(100% - 12px);
    background: rgba(255, 0, 0, 0.25);
  }

  .sandbox-container {
    position: relative;
    margin: auto;
    max-width: 680px;
  }


</style>
