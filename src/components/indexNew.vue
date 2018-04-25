<template>
  <div class="main-container">
    
    <splash />
    <navbarNew :bannerText="content.banner_header" />


    <div class="max-width-container">
      
      <!-- hero row -->
      <div class="row screen-height-min full-bleed first-row background-image" :style="{ 'background-image': 'url(' + heroSVG + ')' }">
        <div class="col-1"></div>
        <div class="col-6">
          <div class="content vert-center">
            <h1 class="h1-large">{{content.section_one_header}}</h1>
            <h3 class="h3-large">{{content.section_one_body_text}}</h3>
          </div>
        </div>
        <div class="col-5"></div>
      </div>

      <!-- copy row -->
      <div class="row full-bleed with-margins-large second-row">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="content text-center">
            <h2 class="h2-large">{{content.section_two_header}}</h2>
            <p class="small extra-line-height">{{content.section_two_body_text}}</p>
          </div>
        </div>
        <div class="col-3"></div>
      </div>

      <!-- color tiles row -->
      <div class="row overflow-hidden">
        <div class="col-3 image-tile rethink">
          <div class="content">
            <div class="image-underlay rethink-underlay"></div>
            <div class="text-logo text-rethink">
                <rethinkText />
            </div>
            <div class="pattern-container">
              <thinkPattern />
            </div>
            <div class="p large shift-p">{{content.rethink_tile_text}}</div>
          </div>
        </div>  
        <div class="col-3 image-tile remake">
          <div class="content">
            <div class="image-underlay remake-underlay"></div>
            <div class="text-logo text-remake">
                <remakeText />
            </div>
            <div class="pattern-container">
              <makePattern />
            </div>
            <div class="p large shift-p">{{content.remake_tile_text}}</div>
          </div>
        </div>
        <div class="col-3 image-tile remarket">
          <div class="content">
            <div class="image-underlay remarket-underlay"></div>
            <div class="text-logo text-remarket">
                <remarketText />
            </div>
            <div class="pattern-container">
              <marketPattern />
            </div>
            <div class="p large shift-p">{{content.remarket_tile_text}}</div>
          </div>
        </div>
        <div class="col-3 image-tile reinvest">
          <div class="content">
            <div class="image-underlay reinvest-underlay"></div>
            <div class="text-logo text-reinvest">
                <reinvestText />
            </div>
            <div class="pattern-container">
              <investPattern />
            </div>
            <div class="p large shift-p">{{content.reinvest_tile_text}}</div>
          </div>
        </div>
      </div>

      <!-- attendees/sponsors text row -->
      <div class="row full-bleed screen-height with-margins attendees-sponsors-row">

        <div class="col-6 full-tablet background-image" :style="{ 'background-image': 'url(' + bgSVGLighter + ')' }">
          <div class="content">
            <div class="attendees-text">
              <div class="h2 h2-large">Attendees</div>
              <p class="small">{{content.attendees_block_body_text}}
              </p>
              <button v-on:click="scrollToForm('formAttendingClass', 'formToggleAttendingClass')">Sign Up</button>
            </div>
          </div>
        </div>

        <div class="col-6 off-black full-tablet background-image" :style="{ 'background-image': 'url(' + bgSVG + ')' }">
          <div class="content">
            <div class="sponsor-text">
              <div class="h2 h2-large">Exhibitors and Sponsors</div> 
              <p class="small">{{content.exhibitors_and_sponsors_block_body_text}}</p>
              <button class="alternate" v-on:click="scrollToForm('formSponsoringClass', 'formToggleSponsoringClass')">Sign Up</button>
            </div>
          </div>
        </div>

      </div>
      
      <!-- stay tuned -->
      <div class="form-toggle form-title formScroll">
        <div class="h2">Stay Tuned for Updates</div>
      </div>


      <!-- form wrapper -->
      <div class="form-wrapper">

      <!-- form buttons -->
      <div class="form-toggle">
        <div class="form-toggle-button" :class="formToggleAttendingClass" v-on:click="toggleForm('formAttendingClass', 'formToggleAttendingClass')">
          <div class="h3 vert-center">Attending</div>
        </div>
        <div class="form-toggle-button" :class="formToggleSpeakingClass" v-on:click="toggleForm('formSpeakingClass', 'formToggleSpeakingClass')">
          <div class="h3 vert-center">Speaking</div>
        </div>
        <div class="form-toggle-button" :class="formToggleSponsoringClass" v-on:click="toggleForm('formSponsoringClass', 'formToggleSponsoringClass')">
          <div class="h3 vert-center">Exhibiting /Sponsoring</div>
        </div>
      </div>

      <!-- form injects -->
      <div class="nf-content-speaking-container" :class="formSpeakingClass">
      </div>

      <div class="nf-content-attending-container" :class="formAttendingClass">
      </div>

      <div class="nf-content-sponsoring-container" :class="formSponsoringClass">
      </div>


      <!-- overlay -->
      <div class="form-transition-overlay" :class="formTransitionClass"></div>

      </div>

      <!-- sponsors -->
      <div class="row full-bleed sponsor-row">
        <div class="h3">our partners</div>
        <img :src="sponsorsImageOne" />
        <img :src="sponsorsImageTwo" />
        <img :src="sponsorsImageThree" />
        <img :src="sponsorsImageFour" />
        <img :src="sponsorsImageFive" />
        <img :src="sponsorsImageSix" />
      </div>

    </div>
    <!-- end 1440px container -->



    <!-- powered by -->
    <div class="row full-bleed powered-by-row">
      <div class="h3">powered by</div>
      <img :src="poweredByImage" />
    </div>


    <!-- footer -->
    <div class="footer row full-bleed">
      <!-- <div class="col-1 off-black"></div> -->
      <div class="col-6 off-black">
        <div class="content">
          <div class="h3 white">See You In</div>
          <clock />
        </div>
      </div>
      <!-- remove off black class if adding social media -->
      <!-- <div class="col-1 off-black"></div>
      <div class="col-4 off-black">
        <div class="content social-media-wrapper">
          <div class="h3">Follow Us</div>
          <div class="social-media">
            <facebook />
            <linkedin />
            <instagram />
            <twitter />
            <youtube />
          </div>
        </div>
      </div> -->
    </div>

  </div>
</template>

<style scoped lang="scss">
  @import '../scss/mixins';
  @import '../scss/colors';
  @import '../scss/fonts';
  @import '../scss/variables';

  .max-width-container {
    max-width: 1440px;
    margin: auto;
  }

  .off-black {
    background-color: $off-black;
    color: $white;
  }

  .white {
    color: $white;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .nf-content-speaking-container, .nf-content-attending-container, .nf-content-sponsoring-container {
    position: relative;
    width: 100%;
    // height: 500px; background: rgba(0, 0, 255, 0.15); // for testing
    &.form-hidden {
      display: none;
    }
  }

  .debug {
    background-color: rgba(255, 0, 0, 0.15);
  }

  .row {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: calc(100% - 24px);
    margin-left: 12px;
    &.screen-height {
      @media screen and (min-width: $tablet-min) {
        height: 100vh;
      }
    }
    &.screen-height-min {
      @media screen and (min-width: $tablet-min) {
      min-height: 100vh;
      }
    }
    &.with-margins {
      margin-top: 24px;
      margin-bottom: 72px;
    }
    &.with-margins-large {
      margin-top: 120px;
      margin-bottom: 120px;
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
      .col-4 {
        width: calc(100% * (4/12))
      }
      .col-5 {
        width: calc(100% * (5/12))
      }
      .col-6 {
        width: calc(100% * (6/12))
      }
      .col-7 {
        width: calc((100% * (7/12))); // height: 100%;
      }
      .col-12 {
        width: 100%;
      }
    }
  }

  .col-3 {
    position: relative;
    width: calc((100% * (3/12)) - 24px);
    @media screen and (max-width: $tablet-max) { // can get away with this for now because col-3 is only used for image row.
      width: calc((100% * (6/12)) - 24px);
      margin-top: 12px;
      margin-bottom: 12px;
    }
    @media screen and (max-width: $mobile-max) { // etc.
      width: calc((100% * (12/12)) - 24px);
    }
  }

  .col-1 {
    position: relative;
    width: calc((100% * (1/12)) - 24px); // height: 100%; // background: rgba(255, 0, 0, 0.25);
  }

  .col-4 {
    position: relative;
    width: calc((100% * (4/12)) - 24px); // height: 100%;
  }

  .col-5 {
    position: relative;
    width: calc((100% * (5/12)) - 24px); // height: 100%;
  }

  .col-6 {
    position: relative;
    width: calc((100% * (6/12)) - 24px); // height: 100%;
  }

  .col-7 {
    position: relative;
    width: calc((100% * (7/12)) - 24px); // height: 100%;
  }

  .col-12 {
    position: relative;
    width: calc(100% - 24px); // height: 100%;
  }

  .full-mobile {
    @media screen and (max-width: $mobile-max) {
      width: 100% !important;
    }
  }

  .full-tablet {
    @media screen and (max-width: $tablet-max) {
      width: 100% !important;
    }
  }

  // header image row
  .first-row {
    // border: 2px solid $off-black;
    box-sizing: border-box;
    width: calc(100% - 48px) !important;
    margin-left: 24px !important;
    min-height: calc(100vh - 48px - 120px) !important;
    margin-top: 144px;
    // padding: 60px 0px;
    // padding-bottom: 60px;
    background-size: contain;
    background-position: center center;
    @media screen and (max-width: $mobile-max) {
      display: block;
      min-height: auto !important;
      background-size: cover !important;
      // background-position: top left;
      .col-1, .col-5 {
        display: none;
      }
      .col-6:not(.background-image):not(.background-image-mobile) {
        .content {
          padding: 60px 24px;
        }
        width: 100% !important;
        > div {
          transform: none;
        }
      }
    }
  }

  // experience remode row
  .second-row {
    width: calc(100% - 48px) !important;
    margin-left: 24px !important;
    @media screen and (max-width: $tablet-max) {
      display: block;
      .col-1, .col-3 {
        display: none;
      }
      .col-6 {
        width: calc(100% * (10/12)) !important;
        margin: auto;
      }
    }
    @media screen and (max-width: $mobile-max) {
      .col-6 {
        width: 100% !important; // calc(100% - 24px) !important;
        // margin-left: 0px;
        // margin-right: 0px;
        // // margin-left: 12px;
        // // width: calc(100% - 48px) !important;
        // // margin-left: 12px;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .background-image-mobile {
    display: none;
  }

  .background-image, .background-image-mobile {
    // background-image: url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/3-5-18/women_standing_outside.jpg'); // url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/Image.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .vert-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  // image tiles

  .image-tile {
    @include aspect-ratio-old(330, 380);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    >.content {
      img, .text-logo {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 24px;
        margin-left: 24px;
      }
      .text-logo {
        width: calc(100% - 48px);
        height: 20px;
        >svg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;          
        }
        &.text-rethink {
          >svg {
            margin-left: -66px;
          }
        }
        &.text-remarket {
          >svg {
            margin-left: -81px;
          }
        }
        &.text-remake {
          >svg {
            margin-left: -62px;
          }
        }
        &.text-reinvest {
          >svg {
            margin-left: -77px;
          }
        }
      }
      .p {
        position: absolute;
        // top: 50%;
        top: 0;
        left: 0;
        // transform: translateY(-50%);
        width: calc(100% - 48px);
        margin-left: 24px;
        margin-top: 108px; // 24px;
        color: $white;
        opacity: 0;
        transition: all 0.6s ease-in-out;
      }
      .shift-p {
        @media screen and (min-width: $desktop-min) and (max-width: 1400px) {
          font-size: 18px !important;
          letter-spacing: 0.5px !important;
          line-height: 24px !important;
        }
      }
    }
    &:hover {
      box-shadow: 0 2px 30px 0 rgba(0,0,0,0.30);
    }
    &:hover, &.hovered {
      .p {
        opacity: 1;
      }
      .image-underlay {
        opacity: 0;
      }
    }
    @media screen and (max-width: $tablet-max) {
      .p {
        opacity: 1 !important;
      }
    }
  }

  .pattern-container {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 72px;
    margin-left: 24px;
    transition: all 0.6s ease-in-out;
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

  // color underlays

  .image-underlay, {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.6s ease-in-out;
  }

  .rethink-underlay {
    background-image:  url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/rethink_block.png');
  }

  .reinvest-underlay {
    background-image:  url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/reinvest_block.png');  
  }

  .remarket-underlay {
    background-image:  url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/remarket_block.png');
  }

  .remake-underlay {
    background-image:  url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/remake_block.png');
  }

 // sponsor section
  .sponsor-image, .attendees-image {
    @include aspect-ratio-old(330,
    380);
    position: absolute;
    top: 0;
    right: 0;
    width: calc(50% - 6px);
    margin-top: 8.5%; // 72px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (max-width: $mobile-max) {
      width: 50%;
    }
  }

  // new vertical text
  .vertical-text-wrapper {
    @include aspect-ratio-old(330,
    380);
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: calc(50% - 6px) !important;
    margin-top: 8.5% !important; // 72px;
    > .content {
      .h2 {
        word-wrap: initial !important;
        position: absolute;
        bottom: 0 !important;
        left: 0 !important;
        margin-left: 40% !important;
        margin-bottom: -4% !important;
        width: 0px !important;
        transform: rotate(-90deg) !important; // translateX(-50%) translateY(-50%);
        color: $white !important;
        @media screen and (max-width: $mobile-max) {
          margin-left: 36px !important;
        }
        &.vertical-text-second {
          margin-left: 47.5% !important;
          margin-bottom: -10% !important;
          color: $black !important;
          >span {
            color: transparent !important;
          }
          @media screen and (max-width: $tablet-max) {
            margin-left: 44% !important;
          }
          @media screen and (max-width: $mobile-max) {
            margin-left: 54px !important;
          }
        }
      }
    }
    @media screen and (max-width: $mobile-max) {
      width: 50% !important;
    } 
  }

  .attendees-sponsors-row {
    @media screen and (min-width: $desktop-min) {
      max-height: 518px;
    }
  }

  .sponsor-text, .attendees-text {
    position: absolute;
    width: 66%;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    display: block !important;
    p, .h2 {
      color: $white;
    }
    .h2 {
      font-weight: bold;
      margin-bottom: 12px;
    }
    @media screen and (max-width: $mobile-max) {
      position: relative;
      transform: none;
      margin: 48px 24px;
      // padding: 72px 0px;
      width: calc(100% - 48px);
    }

  } 

  .attendees-text {
    p, .h2 {
      color: $black;
    }
  }

      button {
      position: relative;
      // margin-bottom: 68px;
      margin-top: 24px;
      background: transparent;
      border: 1px solid $black;
      outline: 0 !important;
      border-radius: 100px;
      // border-radius: 0px;
      text-transform: uppercase;
      padding-left: 24px !important;
      padding-right: 24px !important;
      padding-top: 6px !important;
      padding-bottom: 6px !important;
      font-weight: normal !important;
      cursor: pointer;
      @extend .utility ;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
      // &:hover {
      //   // background: $black;
      //   // border-color: $white;
      //   // color: $white;
      // }
      &.alternate {
        border-color: $white;
        color: $white;
        // &:hover {
        //   // background: $white;
        //   // border-color: $black;
        //   // color: $black;
        // }
      }

      // rollover state (copypaste from navbar, refactor later)
      &::after {
        content: 'sign up';
        color: $white;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 0;
        width: 100%;
        text-transform: uppercase;
        transform: translateY(-50%);
        z-index: 2;
        transition: all 0.6s ease-in-out;
        opacity: 0;
      }


      &::before {
        position: absolute;
        content: ' ';
        top: 0;
        right: 0;
        width: 0%;
        height: 100%;
        background: $black;
        z-index: 1;
        transition: all 0.4s ease-in-out;
        transform-origin: 100% 50% !important;
        border-radius: 100px;
      }


      &:hover {
        &::before {
          right: initial;
          left: 0;
          width: 100%;
        }
        &::after {
          opacity: 1;
          transition-delay: 0s;
        }
      }

      &.alternate {
        &::after {
          color: $black;
        }
        &::before {
          background: $white;
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
    &.form-title {
      height: auto;
      padding-bottom: 72px;
    }
    @media screen and (max-width: $mobile-max) {
      &:not(.form-title) {
        width: 100%;
      }
    }
  }

  .form-toggle-button {
    position: relative;
    width: calc(100% / 3);
    height: 100%;

    background: rgba(132, 148, 161, 0.05);
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;
    text-align: center;
    border-bottom: 2px solid #8494A1;
    border-right: 1px solid #ddd;
    transition: all 0.4s ease-in-out;
    &:hover, &.hovered {
      // background: // blue;
          background: $off-white;
      // background: #8494A1;
      border-bottom: 8px solid $black;

    }
  }

  .form-wrapper {
    position: relative;
    margin: auto;
    background: $off-white;
    width: calc(100% * 10/12);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    >.form-toggle {
      width: 100% !important;
      background: $off-white;
    }
    @media screen and (max-width: $mobile-max) {
      width: 100%;
    }
  }

  .form-transition-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 72px);
    margin-top: 72px;
    z-index: 99;
    background: $off-white;
    opacity: 0;
    transition: all 0.6s ease-in-out;
    pointer-events: none;
    &.transition-active {
      opacity : 1;
    }
  }

  // footer
  .footer {
    position: relative;
    width: 100%;
    // margin-top: 172px;
    .col-7, .col-6, .col-5, .col-4 {
      >.content {
        padding-top: 72px;
        padding-bottom: 72px;
      }
    }
    // REMOVE THIS RULE when social media added back in
    .col-6 {
      width: 100% !important;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    // UNCOMMENT THESE LINES when social media added back in
    // @media screen and (max-width: $mobile-max) {
    //   display: block;
    //   .col-1 {
    //     display: none;
    //   }
    //   .col-7, .col-6, .col-5, .col-4 {
    //     width: 100% !important;
    //     >.content {
    //       position: relative;
    //       width: calc(100% - 48px);
    //       margin-left: 24px;
    //       svg {
    //         margin-right: 24px; // todo: make display flex justify space-between.
    //       }
    //     }
    //   }
    // }
  }

  .social-media-wrapper { 
    // hide social media for now
    opacity: 0;
    pointer-events: none;
    @media screen and(max-width: $tablet-max) {
      display: none;
    }
  }

  .social-media {
    padding-top: 48px;
    svg {
      cursor: pointer;
      margin-right: 36px;
      margin-bottom: 12px;
    }
    @media screen and (max-width: $mobile-max) {
      display: flex;
      justify-content: space-between;
      svg {
        margin: 0px !important;
      }
    }
  }

  // line
  .losAngeles {
    position: relative;
    display: none;
    @media screen and (max-width: $mobile-max) {
      display: block;
      margin-top: 36px;
      margin-bottom: 36px;
      padding-left: 12px;
    }
    >svg {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: -4px;
    }
  }

  // sponsors
  .sponsor-row, .powered-by-row {
    background: white;
    padding-top: 120px;
    padding-bottom: 120px;
    >.h3 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      padding-top: 72px;
      text-transform: capitalize;
    }
    >img {
      transform: translateY(24px);
      margin: 12px;
      @media screen and (max-width: $mobile-max) {
        position: relative;
        // width: calc(100% - 48px);
        // height: 100%;
        padding: 36px; //100%;

        transform: none;
        // margin-top: 36px;
        // margin-bottom: 36px;
      }
    }
  }

  .sponsor-row {
    margin-top: 120px;
  }

  .powered-by-row {
    background: $off-white;
    >.h3 {
      color: $grey;
    }
  }

</style>

<style lang="scss">
  body {
    margin: 0px !important;
  }
</style>

<script>
  import splash from './splash'
  import navbar from './navbar'
  import navbarNew from './navbarNew'
  import clock from './clock'

  // patterns
  import thinkPattern from './patterns/thinkPattern'
  import makePattern from './patterns/makePattern'
  import marketPattern from './patterns/marketPattern'
  import investPattern from './patterns/investPattern'

  import rethinkText from './text/rethink'
  import remakeText from './text/remake'
  import reinvestText from './text/reinvest'
  import remarketText from './text/remarket'
  import bgSVG from '../assets/SVG/bg.svg'
  import bgSVGLighter from '../assets/SVG/bgLighter.svg'
  import heroSVG from '../assets/SVG/heroSVG.svg'



  // icons
  import facebook from './icons/facebook'
  import instagram from './icons/instagram'
  import linkedin from './icons/linkedin'
  import twitter from './icons/twitter'
  import youtube from './icons/youtube'

  // js
  import SmoothScroll from 'smooth-scroll'
  import "babel-polyfill";
  import axios from 'axios'
  import cachedContent from './utils/cachedContent'

  export default {
    data() {
      return {
        lorem: 'Welcome to Your Vue.js App',
        formAttendingClass: '',
        formSpeakingClass: 'form-hidden',
        formSponsoringClass: 'form-hidden',
        formToggleAttendingClass: 'hovered',
        formToggleSpeakingClass: '',
        formToggleSponsoringClass: '',
        formTransitionClass: '',
        timeouts: [],
        content: cachedContent,
        bgSVG,
        bgSVGLighter,
        heroSVG
      }
    },
    computed: {
      sectionOneBackground() {
        if (!this.content.section_one_image) {return ''}
        return "background-image: url('" + this.content.section_one_image.url + "')"
      },
      attendingBackground () {
        if (!this.content.attendees_block_image) {return ''}
        return "background-image: url('" + this.content.attendees_block_image.url + "')"
      },
      sponsorsBackground () {
        if (!this.content.exhibitors_and_sponsors_block_image) {return ''}
        return "background-image: url('" + this.content.exhibitors_and_sponsors_block_image.url + "')"
      },
      sponsorsImageOne () {
        if (!this.content.sponsor_image_1) {return ''}
        return this.content.sponsor_image_1.url
      },
      sponsorsImageTwo () {
        if (!this.content.sponsor_image_2) {return ''}
        return this.content.sponsor_image_2.url
      },
      sponsorsImageThree () {
        if (!this.content.sponsor_image_3) {return ''}
        return this.content.sponsor_image_3.url
      },
      sponsorsImageFour () {
        if (!this.content.sponsor_image_4) {return ''}
        return this.content.sponsor_image_4.url
      },
      sponsorsImageFive () {
        if (!this.content.sponsor_image_5) {return ''}
        return this.content.sponsor_image_5.url
      },
      sponsorsImageSix () {
        if (!this.content.sponsor_image_6) {return ''}
        return this.content.sponsor_image_6.url
      },
      poweredByImage () {
        if (!this.content.powered_by_image) {return ''}
        return this.content.powered_by_image.url
      },
    },
    methods: {
      playFormTransition () {
        var context = this
        this.formTransitionClass = 'transition-active'
        this.timeouts.push(setTimeout(function() {
          context.formTransitionClass = ''
        }, 600))
      },
      toggleForm (form, button) {
        for (var i = 0; i < this.timeouts.length; i ++) {
          clearTimeout(this.timeouts[i])
        }
        var context = this
        this.playFormTransition()
        this.formToggleAttendingClass = ''
        this.formToggleSpeakingClass = '',
        this.formToggleSponsoringClass = ''
        this[button] = 'hovered'
        this.timeouts.push(
        setTimeout(function() {
          context.formSpeakingClass = 'form-hidden'
          context.formAttendingClass = 'form-hidden'
          context.formSponsoringClass = 'form-hidden'
          context[form] = ''
        }, 600)
        )
      },
      scrollToForm (form, button) {
        if(form || button) {
          this.toggleForm(form, button)
        }
        var scroll = new SmoothScroll();
        scroll.animateScroll(document.querySelector('.formScroll'));
      }
    },
    mounted() {
      
      var context = this

      // remove staging in production
      var url = 'https://remode.wpengine.com/wp-json/acf/v3/pages/35'

      if(window.location.href.indexOf('www') !== -1 && window.location.href.indexOf('remode.com') !== -1) {
        console.log('www.remode.com detected')
        url = 'https://www.remode.com/wp-json/acf/v3/pages/35'
      }
      else if(window.location.href.indexOf('remode.com') !== -1 ) {
        console.log('remode.com detected')
        url = 'https://remode.com/wp-json/acf/v3/pages/35'
      }

      axios.get(url)
      .then(function(response) {
        // console.log(response.data.acf)
        context.content = response.data.acf
        // console.log(context.content)
      })

      // axios.get('http://remode.wpengine.com/sample-page/')
      // .then(function(response) {
        // console.log('here')
        // console.log(response.data.content.rendered)
        // // console.log(document.querySelector('.test'))
        // document.querySelector('.test').innerHTML = response.data.content.rendered
        // setTimeout(() => {
        //   var arr = document.querySelector('.test').getElementsByTagName('script')
        //   console.log(arr[0])
        //   // eval(arr[0])
        //   eval(arr[0].innerHTML)
        //   // for (var n = 0; n < arr.length; n++) {
        //   //   eval(arr[n].innerHTML)//run script inside div
        //   // }

        // })
        // console.log(response.data)
        // document.querySelector('.test').innerHTML = response.data
      // })

      // for development
      // this.content = cachedContent
      
      // move form content

      var getNfContentSpeaking = setInterval(function () {
        if (document.getElementById('nf-content-speaking')) {
          document.querySelector('.nf-content-speaking-container').appendChild(document.getElementById('nf-content-speaking'))
          clearInterval(getNfContentSpeaking)
        }
      }, 1000)

      var getNfContentAttending = setInterval(function () {
        if (document.getElementById('nf-content-attending')) {
          document.querySelector('.nf-content-attending-container').appendChild(document.getElementById('nf-content-attending'))
          clearInterval(getNfContentAttending)
        }
      }, 1000)

      var getNfContentSponsoring = setInterval(function () {
        if (document.getElementById('nf-content-sponsoring')) {
          document.querySelector('.nf-content-sponsoring-container').appendChild(document.getElementById('nf-content-sponsoring'))
          clearInterval(getNfContentSponsoring)
        }
      }, 1000)

    },
    components: {
      splash,
      navbar,
      navbarNew,
      thinkPattern,
      makePattern,
      marketPattern,
      investPattern,
      facebook,
      instagram,
      linkedin,
      twitter,
      youtube,
      clock,
      rethinkText,
      remarketText,
      remakeText,
      reinvestText
    }
  }

</script>
