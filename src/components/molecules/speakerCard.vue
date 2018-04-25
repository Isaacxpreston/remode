<template>
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
</template>

<script>
  import imageComponent from '../atoms/imageComponent';

  export default {
    components: {
      imageComponent
    }
  }
</script>

<style scoped lang="scss">

  @import '../../scss/variables';
  @import '../../scss/mixins';

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
