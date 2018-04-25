<template>
  <div class="image-component" :style="styles" :class="classes">
  </div>
</template>


<script>
  export default {
    props: ['image'],
    data () {
      return {
        styles: {
          'background-image': ''
        },
        classes: {
          'loaded': false
        }
      }
    },
    mounted () {
      let downloadingImage = new Image()
      downloadingImage.onload = () => {
        this.styles['background-image'] = "url('" + this.image + "')"
        this.classes['loaded'] = true
      }
      downloadingImage.src = this.image;
    }
  }
</script>

<style scoped lang="scss">
  @import '../../scss/mixins';
  @import '../../scss/colors';

  .image-component {
    @include absolute-full;
    @include background-full;
    &::after {
      content: ' ';
      @include absolute-full;
      background-color: $white;
      opacity: 1;
      transition: all 0.25s ease;
      transition-delay: 0.25s;
    }
    &.loaded {
      &::after {
        opacity: 0;
      }
    }
  }
</style>
