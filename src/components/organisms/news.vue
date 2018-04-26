<template>
  <div class="row row--full news-component">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center news-component__header">
      <h3>REMODE News</h3>
    </div>
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1-half news-component__article">
      <newsCard />
    </div>
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 news-component__article">
      <newsCard />
    </div>
    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 news-component__article">
      <newsCard />
    </div>
  </div>
</template>

<script>
  import newsCard from '../molecules/newsCard'

  export default {
    components: {
      newsCard
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/variables';

  .news-component {
    background: rgba(255, 0, 0, 0.15);
    padding: 48px 0px;
  }

  .news-component__header {
    >h3 {
      margin-bottom: 48px;
    }
    @media screen and (max-width: $tablet-max) {
      >h3 {
        margin-bottom: 24px;
      }
    }
  }

  .news-component__article {
    @media screen and (max-width: $tablet-max) {
      padding-bottom: 24px;
    }
  }

  @media only screen and (min-width: $desktop-min) {
    // custom offset 1 1/2
    .col-lg-offset-1-half {
      margin-left: calc(8.33333333% * 1.5);
    }
  }

</style>
