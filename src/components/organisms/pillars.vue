<template>
  <div class="row row--full pillars-module">

    <!-- header row (main tab) -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row row--no-margin">
        <div class="col-lg-8 col-lg-offset-2 text-center pilars-module__header-copy">
          <h2>Experience REMODE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>

    <!-- tabs -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      <div class="row row--no-margin">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center pillars-module__tab">
          <h4>RETHINK</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center pillars-module__tab">
          <h4>REMAKE</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center pillars-module__tab">
          <h4>REMARKET</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center pillars-module__tab">
          <h4>REINVEST</h4>
        </div>
      </div>
    </div>

    <!-- pillars -->
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 pillars-module__pillar-container">

      <!-- todo: individual pillar component -->
      <div class="row row--no-margin pillar">

        <!-- header + copy -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pillar__copy">
          <h1>REMODE</h1>
          <h3>Pioneering dialogue, insightful takeaways and meaningful connections.</h3>
          <p>REMODE is built around four pillars. Through talks, workshops, exhibits and networking events, each pillar will
            provide attendees with a targeted exploration of current issues and their solutions. In two days, attendees will
            break barriers, connect the dots and understand how to truly make a difference within their organizations.</p>
        </div>

        <!-- label -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pillar__label">
          <h5>Top Speakers</h5>
        </div>

        <!-- speakers -->
        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <speakerCard />
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <speakerCard />
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <speakerCard />
        </div>

      </div>
    </div>

    <!-- session cards -->
    <div class="col-lg-4 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 pillars-module__sessions">
      <h5>Top Sessions</h5>
      <sessionCard />
      <sessionCard />
      <sessionCard />
    </div>

  </div>
</template>

<script>
  import sessionCard from '../molecules/sessionCard'
  import speakerCard from '../molecules/speakerCard'

  export default {
    components: {
      sessionCard,
      speakerCard
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/variables';
  @import '../../scss/mixins'; // (920 / 1140) * 100%
  .pillars-module {
    background: rgba(255, 0, 0, 0.15);
  }

  .pilars-module__header-copy {
    >h2 {
      margin-bottom: 24px;
    }
  }

  .pillars-module__pillar-container,
  .pillars-module__sessions {
    padding-top: 48px;
    @media screen and (max-width: $tablet-max) {
      padding-top: 24px;
    }
  }

  .pillars-module__tab {
    height: 96px;
    @include center-flex;
    box-sizing: border-box;
    border: 2px solid rgba(255, 0, 0, 0.15);
  }

  .pillars-module__sessions {
    >h5,
    >.session-card {
      padding: 12px 0px;
    }
  } // .pillar
  .pillar__copy {
    >h1 {
      margin-bottom: 24px;
    }
    >h3 {
      margin-bottom: 12px;
    }
    >p {
      margin-bottom: 36px;
    }
  }

  .pillar__label {
    >h5 {
      margin-bottom: 12px;
    }
  }

</style>
