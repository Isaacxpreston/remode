<template>
  <div class="main-container">
    <splash />
    <navbar />

    <!-- main image row -->
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

    <!-- copy row -->
    <div class="row full-bleed with-margins">
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

    <!-- color tiles row -->
    <div class="row">
      <div class="col-3 image-tile rethink">
        <div class="content"></div>
      </div>
      <div class="col-3 image-tile remake">
        <div class="content"></div>
      </div>
      <div class="col-3 image-tile remarket">
        <div class="content"></div>
      </div>
      <div class="col-3 image-tile reinvest">
        <div class="content"></div>
      </div>
    </div>

    <!-- sideways text row -->
    <div class="row full-bleed screen-height-min with-margins">
      <div class="col-6 off-black">
        <div class="content">
          <div class="attendees-image"></div>
          <div class="vertical-text h2">Attendees</div>
          <div class="attendees-text">
            <p class="small">Attendees will have access to an informational and inspirational experience at REMODE. Fashion brands, suppliers,
              and investors will come together to share innovative ideas, formulate practical solutions and forge new connections. Attendees
              will leave with the ideas, resources, and contacts that will help them thrive in an omnichannel and sustainable
              environment.
            </p>
            <button class="alternate">Sign Up</button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="content">
          <div class="sponsor-image"></div>
          <div class="vertical-text vertical-text-second h2">Exhibitors<span>a</span>and Sponsors</div>
          <div class="sponsor-text">
            <p class="small">If you are a fashion tech company, an innovative or sustainable raw material supplier, a tech, retail or services
              company focused on fashion, Remode is a unique opportunity to show who you are, share your story, build your
              leadership, generate leads and connect with the fashion community. </p>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>

    <!-- form buttons -->
    <div class="form-toggle">
      <div class="form-toggle-button">
        <div class="h3 vert-center">Attending</div>
      </div>
      <div class="form-toggle-button">
        <div class="h3 vert-center">Speaking</div>
      </div>
      <div class="form-toggle-button">
        <div class="h3 vert-center">Exhibiting /Sponsoring</div>
      </div>
    </div>

    <!-- form -->
    <div class="nf-content-inject">

    </div>

  </div>
</template>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/colors';
  @import '../scss/fonts';
  @import '../scss/variables'; // .main-container {
  //   position: relative;
  //   margin: auto;
  //   width: 100%;
  //   max-width: 1280px;
  // }

  .off-black {
    background-color: $off-black;
  }

  .nf-content-inject {
    position: relative;
    width: 100%;
    height: 200px;
    margin-top: 72px;
  }

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
    &.screen-height-min {
      min-height: 100vh;
    }
    &.with-margins {
      margin-top: 72px;
      margin-bottom: 72px;
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

  .image-tile {
    @include aspect-ratio(330, 380);
  }

  .col-3 {
    position: relative;
    width: calc((100% * (3/12)) - 24px);
    background: rgba(255, 0, 0, 0.15); // move this
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
    background-image: url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/Image.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .vert-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  } // colors
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
  } // sponsor section
  .sponsor-image, .attendees-image {
    @include aspect-ratio(330,
    380);
    position: absolute;
    top: 0;
    right: 0;
    width: calc(50% - 24px);
    margin-top: 8.5%; // 72px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .sponsor-image {
    background-image: url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/sponsors.png')
  }

  .attendees-image {
    background-image: url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/attendees.png')
  }

  .vertical-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    transform: rotate(-90deg);
    transform-origin: bottom;
    color: $white;
    background: rgba(255, 0, 0, 0.15);
    margin-top: 52.5%;
    margin-left: 25%;
    word-wrap: initial !important;
    &.vertical-text-second {
      color: $black;
      margin-top: 45%;
      margin-left: 35%;
      >span {
        color: transparent !important;
      }
    }
  }

  .sponsor-text, .attendees-text {
    // position: absolute;
    // background: rgba(255, 0, 0, 0.15); // top: 0;
    // left: 50%;
    width: 66%; // height: 48px;
    // transform: translateX(-50%);
    margin: auto;
    margin-top: 70%;
    display: block !important;
    p {
      color: $black;
    }


  } 

  .attendees-text {
    p {
      color: $white;
    }
  }

      button {
      margin-bottom: 68px;
      margin-top: 24px;
      background: transparent;
      border: 1px solid $black;
      border-radius: 100px;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      @extend .utility ;
      transition: all 0.4s ease-in-out;
      &:hover {
        background: $black;
        border-color: $white;
        color: $white;
      }
      &.alternate {
        border-color: $white;
        color: $white;
        &:hover {
          background: $white;
          border-color: $black;
          color: $black;
        }
      }
    }
  
  // form toggle buttons 
  .form-toggle {
    position: relative;
    margin: auto;
    display: flex;
    width: calc(100% * (10/12));
    height: 72px;
    background: rgba(255, 0, 0, 0.15);
  }

  .form-toggle-button {
    position: relative;
    width: calc(100% / 3);
    height: 100%;
    background: rgba(255, 0, 0, 0.25);
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    border-bottom: 1px solid transparent;
    text-align: center;
    &:hover {
      border-bottom: 1px solid $black;
    }
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
      navbar,
    },
    mounted() {

      var getNfContent = setInterval(function () {
        if (document.getElementById('nf-content-one')) {
          document.querySelector('.nf-content-inject').appendChild(document.getElementById('nf-content-one'))
          clearInterval(getNfContent)
        }
      }, 500)

      // if(document.getElementById('nf-content-one')) {
      //   document.querySelector('.nf-content-inject').appendChild(document.getElementById('nf-content-one'))
      // } else {
      //   console.log('could not find nf content')
      // }

    }
  }

</script>
