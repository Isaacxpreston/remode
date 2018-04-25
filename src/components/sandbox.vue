<template>
  <div>
    
    <h1>sandbox</h1>
    
    <div class="image-container">
      <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
    </div>

  </div>
</template>

<script>
  import imageComponent from './molecules/imageComponent'

  export default {

    components: {
      imageComponent
    }
  }
</script>

<style scoped lang="scss">
  .image-container {
    position: relative;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
  }
</style>