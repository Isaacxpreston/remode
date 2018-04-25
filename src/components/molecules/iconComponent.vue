<template>
  <img class="icon-image" :class="[classes, computedClasses]" :src="image" @click="openUrl(url)" />
</template>

<script>
import openUrl from '../mixins/openUrl'
  export default {
    props: ['image'],
    mixins: [openUrl],
    data () {
      return {
        classes: {
          "loaded": false
        }
      }
    },
    computed: {
      computedClasses () {
        let classes = {
          "has-url": false
        }

        if (this.url) classes["has-url"] = true

        return classes
      }
    },
    mounted () {
      let downloadingImage = new Image()
      downloadingImage.onload = () => {
        this.classes['loaded'] = true
      }
      downloadingImage.src = this.image;
    }
  }
</script>


<style scoped lang="scss">
  @import '../../scss/mixins';
  @import '../../scss/colors';

  .icon-image {
    position: relative;
    height: 48px;
    opacity: 0;
    transition: all 0.25s ease;
    transition-delay: 0.25s;
    &.loaded {
      opacity: 1;
    }
    &.has-url {
      cursor: pointer;
    }
  }

</style>
