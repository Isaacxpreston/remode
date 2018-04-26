<template>
  <div class="testimonial-card">
    <div class="content">

      <iconComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/03/NYFTL.png" url="http://google.com" />

      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.”</p>
    </div>
  </div>
</template>

<script>
  import iconComponent from '../atoms/iconComponent'
  export default {
    components: {
      iconComponent
    }
  }
</script>

<style scoped lang="scss">
  @import '../../scss/mixins';
  
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
</style>
