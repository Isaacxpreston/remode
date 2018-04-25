<template>
  <div>

    <div class="sandbox-container">

      <h1>sandbox</h1>

      <buttonComponent text="get your pass" url="http://google.com" />

      <br />

      <!-- <p>image card</p>

      <div class="image-card">
        <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
      </div> -->

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
          <div class="img-block"></div>
        </div>
      </div>

      <p>video card</p>

      <div class="video-card"></div>

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

      <div class="speaker-card">
        <div class="speaker-card__image">
          <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
        </div>
        <div class="speaker-card__content">
          <div class="speaker-card__inner">
            <div class="utility uppercase">rethink</div>
            <h5>lorem ipsum</h5>
            <p class="p small">title, company</p>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import imageComponent from './molecules/imageComponent'
  import buttonComponent from './molecules/buttonComponent'

  export default {

    components: {
      imageComponent,
      buttonComponent,
    }
  }

</script>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/variables';

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
      width: 100%;
      margin: 24px;
      .img-block {
        position: relative;
        background: blue;
        width: 48px;
        height: 48px;
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

  .speaker-card {
    position: relative;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
    >.speaker-card__image {
      @include ratio-card(1, 1);
    }
    >.speaker-card__content {
      position: relative;
      background: rgba(255, 0, 0, 0.15);
      >.speaker-card__inner {
        position: relative;
        padding: 12px;
        >.utility {
          margin-bottom: 12px;
        }
      }
    }
    @media screen and (max-width: $mobile-max) {
      display: flex;
      >.speaker-card__image {
        width: 33%;
      }
      >.speaker-card__content {
        width: 66%;
        @include center-flex;
        >.speaker-card__inner {
          text-align: center;
        }
      }
    }
  }

</style>
