<template>
  <div class="row row--full heavy-text">

    <!-- asset -->
    <div class="col-lg-5 hide-tablet hide-mobile">
      <imageComponent image="http://remode.staging.wpengine.com/wp-content/uploads/2018/02/Image.png" />
    </div>
    <!--  -->

    <!-- copy -->
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 heavy-text__copy">
      <h2>REMODE is…</h2>

      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>

      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
    </div>
    <!--  -->

  </div>
</template>

<script>
  import imageComponent from '../atoms/imageComponent'
  export default {
    components: {
      imageComponent
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/variables';

  .heavy-text {
    padding-top: 156px;
    padding-bottom: 156px;
    background: rgba(255, 0, 0, 0.15);
    @media screen and (max-width: $tablet-max) {
      padding-top: 48px;
      padding-bottom: 60px;
    }
  }

  .heavy-text__copy {
    >h1, >h2, >h3, >h4, >h5, >p {
      margin: 24px;
    }
  }

</style>
