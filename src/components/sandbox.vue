<template>
  <div>

    <h1>sandbox</h1>

    <buttonComponent text="get your pass" url="http://google.com" />

    <br />

    <p>image card</p>

    <!-- speaker card = image card -->
    <div class="image-card">
      <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
    </div>

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
      <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
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

  .image-card {
    @include ratio-card(1, 1);
  }

  .session-card {
    @include ratio-card(447, 156);
    >.content {
      position: relative;
      margin: 24px;
      >.utility {
        margin-bottom: 24px;
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
    @include ratio-card(330, 220);
  }

</style>
