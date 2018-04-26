<template>
  <div class="row row--no-margin pillar">

    <!-- header + copy -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pillar__copy">
      <h1>{{title}}</h1>
      <h3>Pioneering dialogue, insightful takeaways and meaningful connections.</h3>
      <p class="hide-tablet hide-mobile">REMODE is built around four pillars. Through talks, workshops, exhibits and networking events, each pillar will provide
        attendees with a targeted exploration of current issues and their solutions. In two days, attendees will break barriers,
        connect the dots and understand how to truly make a difference within their organizations.</p>
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
</template>

<script>
  import speakerCard from '../molecules/speakerCard';

  export default {
    props: ['title'],
    components: {
      speakerCard
    }
  }

</script>


<style scoped lang="scss">
  @import '../../scss/variables'; // .pillar
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
    @media screen and (max-width: $tablet-max) {
      text-align: center;
    }
  }

  .pillar__label {
    >h5 {
      margin-bottom: 12px;
    }
    @media screen and (max-width: $tablet-max) {
      text-align: center;
    }
  }

</style>
