<template>
  <div>

    <h1>sandbox</h1>

    <div class="image-container">
      <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
    </div>

    <br />
    <br />

    <buttonComponent text="get your pass" url="http://google.com" />

    <br />

    <p> sessions card </p>

    <div class="sessions-card">
      <div class="content">
        <div class="utility uppercase">rethink / speaker</div>
        <h5>lorem ipsum</h5>
        <p class="p small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.</p>
      </div>
    </div>

    <p></p>


  </div>
</template>

<script>
  import imageComponent from './molecules/imageComponent'
  import buttonComponent from './molecules/buttonComponent'

  export default {

    components: {
      imageComponent,
      buttonComponent
    }
  }

</script>

<style scoped lang="scss">
  @import '../scss/mixins';

  .image-container {
    position: relative;
    width: 400px;
    height: 400px;
  }

  .sessions-card {
    @include aspect-ratio(447, 156);
    @include center-flex;
    width: 100%;
    background: rgba(255, 0, 0, 0.15);
    >.content {
      position: relative;
      margin: 24px;
      >.utility {
        margin-bottom: 24px;
      }
    }
  }

  // 375 / 180

</style>
