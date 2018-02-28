<template>
  <div>
    <splash />
    <navbar />
  </div>
</template>

<script>
import splash from './splash'
import navbar from './navbar';
export default {
  data () {
    return {
      lorem: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    splash,
    navbar
  }
}
</script>
