<template>
  <div class="session-card">
    <div class="content">
      <div class="utility uppercase">rethink / speaker</div>
      <h5>lorem ipsum</h5>
      <p class="p small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

  @import '../../scss/variables';
  @import '../../scss/mixins';
  
  .session-card {
    @include ratio-card(447, 156);
    >.content {
      position: relative;
      padding: 24px;
      background: rgba(255, 0, 0, 0.15);
      >.utility {
        margin-bottom: 24px;
        @media screen and (max-width: $mobile-max) {
          margin-bottom: 12px;
        }
      }
    }
  }

</style>
