<template>
  <div>

    <!-- hero section -->
    
    <!-- row -->

      <div class="row hero-row">
        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 hero-row__content">
          <h1 class="bold">The Premier Event for Disruptive and Sustainable Fashion</h1>
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
      </div>

      <!-- row -->
        <!-- carousel controls -->
        <!-- clock -->
      <!-- end row -->

    <!-- end row -->


    <!-- components -->
    <div class="sandbox-container" style="display: none">

      <h1>atoms sandbox</h1>

      <buttonComponent text="button dark" url="http://google.com" />

      <br />

      <buttonComponent text="button light" url="http://google.com" light="true" />

      <br />

      <p> session card </p>

      <div class="session-card">
        <div class="content">
          <div class="utility uppercase">rethink / speaker</div>
          <h5>lorem ipsum</h5>
          <p class="p small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.</p>
        </div>
      </div>

      <p>testimonial card</p>

      <div class="testimonial-card">
        <div class="content">

          <iconComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/03/NYFTL.png" url="http://google.com" />

          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.”</p>
        </div>
      </div>

      <p>video card</p>

      <div class="video-card">
        <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
      </div>

      <p>news card</p>

      <div class="news-card">
        <div class="news-card__image">
          <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
        </div>
        <div class="news-card__content">
          <div class="utility uppercase">topic</div>
          <h5>lorem ipsum</h5>
          <p class="p small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.y</p>
        </div>
      </div>

      <p>speaker card</p>

      <speakerCard />

    </div>


  </div>
</template>

<script>
  import imageComponent from './atoms/imageComponent'
  import iconComponent from './atoms/iconComponent'
  import buttonComponent from './atoms/buttonComponent'

  import speakerCard from './molecules/speakerCard'

  export default {

    components: {
      imageComponent,
      buttonComponent,
      iconComponent,
      speakerCard
    }
  }

</script>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/variables';

  .row {
    position: relative;
    width: calc(100% - 24px);
    margin: auto;
    background: rgba(255, 0, 0, 0.15); // margin: 0px;
    >div {
      background: rgba(255, 0, 0, 0.15);
    }
  }

  .col-content {
    position: relative;
    margin: auto;
    width: 100%; // width: calc(100% - 12px);
    background: rgba(255, 0, 0, 0.25);
  }

  .hero-row {
    // padding-top is whitespace from nav to content
    // todo: move one layer up, as .hero-row will be a nested slider
    padding-top: 72px;
    @media screen and (max-width: $tablet-max) {
      padding-top: 48px;
    }
  }

  .hero-row__content {
    >h1, >h3 {
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


  .sandbox-container {
    position: relative;
    margin: auto;
    max-width: 680px;
  }

  .session-card {
    @include ratio-card(447, 156);
    >.content {
      position: relative;
      padding: 24px;
      background: rgba(255, 0, 0, 0.15);
      >.utility {
        margin-bottom: 24px;
        @media screen and (max-width: $mobile-max) {
          margin-bottom: 12px;
        }
      }
    }
  }

  .testimonial-card {
    @include ratio-card(375, 180);
    >.content {
      position: relative;
      background: rgba(255, 0, 0, 0.15);
      width: 100%;
      padding: 24px;
      >.icon-image {
        margin-bottom: 12px;
      }
    }
  }

  .video-card {
    @include ratio-card(684, 385)
  }

  .news-card {
    position: relative;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
    >.news-card__image {
      @include ratio-card(330, 220);
    }
    >.news-card__content {
      position: relative;
      background: rgba(255, 0, 0, 0.15);
      padding: 24px;
      >h5 {
        margin: 12px 0px;
      }
    }
  }

</style>
