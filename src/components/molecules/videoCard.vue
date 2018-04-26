<template>
  <div class="video-card">
    <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
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
  
  .video-card {
    @include ratio-card(684, 385)
  }

</style>
