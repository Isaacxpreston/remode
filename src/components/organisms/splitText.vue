<template>
  <div class="row row--full split-text">
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 split-text__col">
      <div class="split-text__content">
        <h2>Attendees</h2>
        <p>Are you a fashion brand looking to evolve and solve for the industry’s biggest challenges? At REMODE you will hear
          from fashion’s leading innovators, gain access to a collaborative network of the right people and resources, and
          leave with an actionable plan for innovation and growth beyond the status quo.</p>
        <buttonComponent text="get your pass" url="http://google.com" light="true" />
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 split-text__col">
      <div class="split-text__content">
        <h2>Exhibitors & Sponsors</h2>
        <p>Are you a sustainable raw material supplier, or a fashion technology, retail or services company? REMODE is your
          unique opportunity to share your story, generate leads and connect with a solution-hungry fashion community.</p>
        <buttonComponent text="get in touch" url="http://google.com" light="true" />
      </div>
    </div>
  </div>
</template>

<script>
  import buttonComponent from '../atoms/buttonComponent'
  export default {
    components: {
      buttonComponent
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/variables';
  @import '../../scss/mixins';
  // center flex col
  // 60 padding top bottom 48 padding top bottom content div

  .split-text__col {
    @include center-flex;
  }

  .split-text__content {
    padding: 60px 0px;
    max-width: (448 / 720) * 100%;
    >h2, >p {
      margin-bottom: 24px;
    }
    @media screen and (max-width: $tablet-max) {
      text-align: center;
      padding: 48px 0px;
      max-width: calc(100% - 48px);
      >.button {
        margin: auto;
      }
    }
  }



</style>
