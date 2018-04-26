<template>
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
</template>

<script>
  import imageComponent from '../atoms/imageComponent'
  export default {
    components: {
      imageComponent
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/mixins';

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
