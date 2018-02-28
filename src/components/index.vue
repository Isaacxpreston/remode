<template>
  <div>
    <splash />
    <navbar />


    <div class="row screen-height full-bleed">
      <div class="col-1"></div>
      <div class="col-5">
        <div class="content vert-center">
          <h1>The game-changing event for innovative and sustainable fashion.</h1>
          <p class="large">Fashion is changing for the better. Be a part of the solution in a two-day event packed with innovative ideas,
            practical solutions and new connections.</p>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-5 background-image"></div>
    </div>

    <div class="row full-bleed">
      <div class="col-1"></div>
      <div class="col-5">
        <div class="content">
          <h2>Experience ReMode</h2>
          <p class="small">Content and experiences at REMODE are built on four pillars. Within each pillar, participants will explore the
            present issues in the industry and shape the future of fashion with two days of conferences, workshops, exhibits
            and networking events. This 360 approach allows brands to break the silos, connect the dots and truly make a
            difference within their organizations.</p>
        </div>
      </div>
      <div class="col-6"></div>
    </div>

    <div class="row">
      <div class="col-3 rethink">
        <div class="content"></div>
      </div>
      <div class="col-3 remake">
        <div class="content"></div>
      </div>
      <div class="col-3 remarket">
        <div class="content"></div>
      </div>
      <div class="col-3 reinvest">
        <div class="content"></div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/colors';
  @import '../scss/variables';

  .debug {
    background-color: rgba(255, 0, 0, 0.15);
  }

  .row {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: calc(100% - 24px);
    margin-left: 12px;
    &.screen-height {
      height: 100vh; // background: rgba(255, 0, 0, 0.15);
    }
    &.full-bleed {
      width: 100%;
      margin-left: 0px;
      .col-1 {
        width: calc(100% * (1/12))
      }
      .col-3 {
        width: calc(100% * (3/12))
      }
      .col-5 {
        width: calc(100% * (5/12))
      }
      .col-6 {
        width: calc(100% * (6/12))
      }
    }
  }

  .col-3 {
    position: relative;
    width: calc((100% * (3/12)) - 24px);
    background: rgba(255, 0, 0, 0.15); // move this
    @include aspect-ratio(330, 380);
  }

  .col-1 {
    position: relative;
    width: calc((100% * (1/12)) - 24px); // height: 100%; // background: rgba(255, 0, 0, 0.25);
  }

  .col-5 {
    position: relative;
    width: calc((100% * (5/12)) - 24px); // height: 100%;
  }

  .col-6 {
    position: relative;
    width: calc((100% * (6/12)) - 24px); // height: 100%;
  }

  .background-image {
    background-image: url('../assets/image/Image.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .vert-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  // colors

  .rethink {
    background-color: $rethink;
  }

  .reinvest {
    background-color: $reinvest;
  }

  .remarket {
    background-color: $remarket;
  }

  .remake {
    background-color: $remake;
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
