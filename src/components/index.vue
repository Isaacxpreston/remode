<template>
  <div>
    <splash />
    <navbar />
        

    <div class="row screen-height full-bleed">
      <div class="col-1"></div>
      <div class="col-5">
        <div class="content">
          <h1>The game-changing event for innovative and sustainable fashion.</h1>
          <p class="large">Fashion is changing for the better. Be a part of the solution in a two-day event packed with innovative ideas, practical solutions and new connections.</p>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-5 background-image"></div>
    </div>

    <div class="row">
      <div class="col">
        <div class="content">here</div>
      </div>
      <div class="col">
        <div class="content">here</div>
      </div>
      <div class="col">
        <div class="content">here</div>
      </div>
      <div class="col">
        <div class="content">here</div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  @import '../scss/mixins';
  
  .row {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: calc(100% - 24px);
    margin-left: 12px;
    &.screen-height {
      height: 100vh;
      // background: rgba(255, 0, 0, 0.15);
    }
    &.full-bleed {
      width: 100%;
      margin-left: 0px;
    }
  }

  .col {
    position: relative;
    width: calc((100% / 4) - 24px);
    background: rgba(255, 0, 0, 0.15);
    @include aspect-ratio(330, 380);
    >.content {
      background: rgba(255, 0, 0, 0.15);
    }
  }

  .col-1 {
    position: relative;
    width: calc((100% * (1/12)));
    height: 100%;
    // background: rgba(255, 0, 0, 0.25);
  }

  .col-5 {
    position: relative;
    width: calc((100% * (5/12)));
    height: 100%;
    // background: rgba(255, 0, 0, 0.15);
    >.content {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .background-image {
    background-image: url('../assets/image/Image.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>

<script>
  import splash from './splash'
  import navbar from './navbar';
  export default {
    data() {
      return {
        lorem: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      splash,
      navbar
    }
  }

</script>
