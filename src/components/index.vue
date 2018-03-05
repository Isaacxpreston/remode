<template>
  <div class="main-container">
    
    <splash />
    <navbar />

    <!-- main image row -->
    <div class="row screen-height-min full-bleed first-row">
      <div class="col-5 background-image-mobile"></div>
      <div class="col-1"></div>
      <div class="col-5">
        <div class="content vert-center">
            <div class="p small losAngeles">
              <svg width="3px" height="48px" viewBox="0 0 3 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="homepage" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-378.000000, -29.000000)" stroke-dasharray="5" stroke-linecap="round">
                    <path d="M379.5,30.5 L379.5,77.5" id="Line" stroke="#082842" stroke-width="2"></path>
                </g>
              </svg>
              <b>Los Angeles</b><br />
              Nov 13 & 14, 2018
          </div>
          <h1>The game-changing event for innovative and sustainable fashion.</h1>
          <p class="large">Fashion is changing for the better. Be a part of the solution in a two-day event packed with innovative ideas,
            practical solutions and new connections.</p>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-5 background-image"></div>
    </div>

    <!-- copy row -->
    <div class="row full-bleed with-margins second-row">
      <div class="col-1"></div>
      <div class="col-5">
        <div class="content">
          <h2>Experience ReMode</h2>
          <p class="small extra-line-height">Content and experiences at REMODE are built on four pillars. Within each pillar, participants will explore the
            present issues in the industry and shape the future of fashion with two days of conferences, workshops, exhibits
            and networking events. This 360 approach allows brands to break the silos, connect the dots and truly make a
            difference within their organizations.</p>
        </div>
      </div>
      <div class="col-6"></div>
    </div>

    <!-- color tiles row -->
    <div class="row overflow-hidden">
      <div class="col-3 image-tile rethink">
        <div class="content">
          <div class="image-underlay rethink-underlay"></div>
          <img src="https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/rethink.png" />
          <div class="pattern-container">
            <thinkPattern />
          </div>
          <div class="p large shift-p">Consumer trends for the future and innovations in product and materials.</div>
        </div>
      </div>  
      <div class="col-3 image-tile remake">
        <div class="content">
          <div class="image-underlay remake-underlay"></div>
          <img src="https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/remake.png" />
          <div class="pattern-container">
            <makePattern />
          </div>
          <div class="p large shift-p">Ideas and solutions for design, production, wearables, and sustainability.</div>
        </div>
      </div>
      <div class="col-3 image-tile remarket">
        <div class="content">
          <div class="image-underlay remarket-underlay"></div>
          <img src="https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/remarket.png" />
          <div class="pattern-container">
            <marketPattern />
          </div>
          <div class="p large shift-p">Marketing and sales strategies for omnichannel success, including technological innovations and best practices in storytelling.</div>
        </div>
      </div>
      <div class="col-3 image-tile reinvest">
        <div class="content">
          <div class="image-underlay reinvest-underlay"></div>
          <img src="https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/reinvest.png" />
          <div class="pattern-container">
            <investPattern />
          </div>
          <div class="p large shift-p">Innovative ways to finance and maintain a sustainable brand.</div>
        </div>
      </div>
    </div>

    <!-- sideways text row -->
    <div class="row full-bleed screen-height-min with-margins">
      <div class="col-6 off-black full-tablet">
        <div class="content">
          <div class="attendees-image"></div>
          <div class="vertical-text h2">Attendees</div>
          <div class="attendees-text">
            <p class="small">If you are a fashion brand, for two days, you will hear the best ideas, meet the right people and find the resources to design and execute an actionable growth plan. You will connect to the network that will make you succeed in a fast-changing market.
            </p>
            <button class="alternate" v-on:click="scrollToForm">Sign Up</button>
          </div>
        </div>
      </div>
      <div class="col-6 full-tablet">
        <div class="content">
          <div class="sponsor-image"></div>
          <div class="vertical-text vertical-text-second h2">Exhibitors<span>a</span>and Sponsors</div>
          <div class="sponsor-text">
            <p class="small">If you are a fashion tech company, an innovative or sustainable raw material supplier, a tech, retail or services
              company focused on fashion, Remode is a unique opportunity to show who you are, share your story, build your
              leadership, generate leads and connect with the fashion community. </p>
            <button v-on:click="scrollToForm">Sign Up</button>
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
  
  // .main-container {
  //   position: relative;
  //   margin: auto;
  //   width: 100%;
  //   max-width: 1280px;
  // }

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
    @media screen and (max-width: $tablet-max) {
      margin-top: 76px; // not sure why in production this is needed.
    }
    @media screen and (max-width: 790px) {
      margin-top: 62px; // cont.
    }
    @media screen and (max-width: $mobile-max) {
      display: block;
      margin-top: 0px;
      .col-1 {
        display: none;
      }
      .col-5:not(.background-image):not(.background-image-mobile) {
        width: calc(100% - 48px) !important;
        margin-left: 24px;
        > div {
          transform: none;
        }
      }
      .background-image {
        display: none;
      }
      .background-image-mobile {
        display: block !important;
        width: 100% !important;
        height: calc(100vh - 120px) !important;
        // @include aspect-ratio(330, 380)
      }
    }
  }

  // experience remode row
  .second-row {
    @media screen and (max-width: $tablet-max) {
      display: block;
      .col-1, .col-6 {
        display: none;
      }
      .col-5 {
        width: calc(100% * (10/12)) !important;
        margin: auto;
      }
    }
    @media screen and (max-width: $mobile-max) {
      .col-5 {
        width: calc(100% - 48px) !important;
        margin-left: 24px;
      }
    }
  }

  .background-image-mobile {
    display: none;
  }

  .background-image, .background-image-mobile {
    background-image: url('https://s3-us-west-2.amazonaws.com/remode-vpv/assets/image/Image.png');
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
    @include aspect-ratio(330, 380);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    >.content {
      img {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 24px;
        margin-left: 24px;
      }
      .p {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: calc(100% - 48px);
        margin-left: 24px;
        margin-top: 24px;
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
      // .pattern-container {
      //   // margin-top: 100%;
      // }
      .p {
        opacity: 1;
      }
      .image-underlay {
        opacity: 0;
      }
    }
    @media screen and (max-width: $tablet-max) {
      // .pattern-container {
      //   // margin-top: 100%;
      // }
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
    @include aspect-ratio(330,
    380);
    position: absolute;
    top: 0;
    right: 0;
    width: calc(50% - 6px);
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
    // left: 0;
    // width: 0px;
    left: 50%;
    width: 48px;
    height: 48px;
    transform: rotate(-90deg) translateX(-50%);
    text-align: center;
    // transform-origin: bottom;
    color: $white;
    // background: rgba(255, 0, 0, 0.15);
    margin-top: 45%;
    // margin-left: 25%;
    margin-left: -34%;
    word-wrap: initial !important;
    &.vertical-text-second {
      color: $black;
      // margin-top: 45%;
      // margin-left: 35%;
      >span {
        color: transparent !important;
      }
    }
  }

  .sponsor-text, .attendees-text {
    width: 66%;
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
      outline: 0 !important;
      // border-radius: 100px;
      text-transform: uppercase;
      padding-left: 24px;
      padding-right: 24px;
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
    background: $off-white;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    border-bottom: 1px solid transparent;
    text-align: center;
    &:hover, &.hovered {
      border-bottom: 2px solid $black;
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
    background: $white;
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
    margin-top: 172px;
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
    @media screen and (max-width: $mobile-max) {
      display: block;
      .col-1 {
        display: none;
      }
      .col-7, .col-6, .col-5, .col-4 {
        width: 100% !important;
        >.content {
          position: relative;
          width: calc(100% - 48px);
          margin-left: 24px;
          svg {
            margin-right: 24px; // todo: make display flex justify space-between.
          }
        }
      }
    }
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

</style>

<style lang="scss">
  body {
    margin: 0px !important;
  }
</style>

<script>
  import splash from './splash'
  import navbar from './navbar'
  import clock from './clock'

  // patterns
  import thinkPattern from './patterns/thinkPattern'
  import makePattern from './patterns/makePattern'
  import marketPattern from './patterns/marketPattern'
  import investPattern from './patterns/investPattern'

  // icons
  import facebook from './icons/facebook'
  import instagram from './icons/instagram'
  import linkedin from './icons/linkedin'
  import twitter from './icons/twitter'
  import youtube from './icons/youtube'

  // js
  import SmoothScroll from 'smooth-scroll'

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
        timeouts: []
      }
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
      scrollToForm () {
        var scroll = new SmoothScroll();
        scroll.animateScroll(document.querySelector('.formScroll'));
      }
    },
    mounted() {
      
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
      thinkPattern,
      makePattern,
      marketPattern,
      investPattern,
      facebook,
      instagram,
      linkedin,
      twitter,
      youtube,
      clock
    }
  }

</script>
