<template>
  <div class="row row--full pillars-module">

    <!-- header row (main tab) -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row row--no-margin">
        <div class="col-lg-8 col-lg-offset-2 text-center pilars-module__header-copy" @click="showPillar('REMODE')">
          <h2>Experience REMODE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>

    <!-- tabs -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      <div class="row row--no-margin">
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 pillars-module__tab" @click="showPillar('RETHINK')">
          <h4>RETHINK</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 pillars-module__tab" @click="showPillar('REMAKE')">
          <h4>REMAKE</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 pillars-module__tab" @click="showPillar('REMARKET')">
          <h4>REMARKET</h4>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 pillars-module__tab" @click="showPillar('REINVEST')">
          <h4>REINVEST</h4>
        </div>
      </div>
    </div>

    <!-- pillars -->
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 pillars-module__pillar-container">

      <!-- todo: individual pillar component -->
      <pillar title="REMODE" v-show="currentPillar === 'REMODE'" />
      <pillar title="RETHINK" v-show="currentPillar === 'RETHINK'" />
      <pillar title="REMAKE" v-show="currentPillar === 'REMAKE'"/>
      <pillar title="REMARKET" v-show="currentPillar === 'REMARKET'" />
      <pillar title="REINVEST" v-show="currentPillar === 'REINVEST'" />

    </div>

    <!-- session cards -->
    <div class="col-lg-4 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 pillars-module__sessions">
      <h5>Top Sessions</h5>
      <sessionCard />
      <sessionCard />
      <sessionCard />
    </div>
    
    <!-- todo: bottom tabs mobile open -->

  </div>
</template>

<script>
  import sessionCard from '../molecules/sessionCard'
  import pillar from './pillar'

  export default {
    data () {
      return {
        currentPillar: 'REMODE'
      }
    },
    methods: {
      showPillar (pillar) {
        this.currentPillar = pillar
      }
    },
    components: {
      sessionCard,
      pillar
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
    cursor: pointer;
    user-select: none;
    >h2, >p {
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
    cursor: pointer;
    @media screen and (max-width: $tablet-max) {
      height: 62px;
      justify-content: left;
    }
  }

  .pillars-module__sessions {
    >h5,
    >.session-card {
      padding: 12px 0px;
    }
    @media screen and (max-width: $tablet-max) {
      >h5 {
        text-align: center;
      }
    }
  }
  


</style>
