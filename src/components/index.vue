<template>
  <div>
    <!-- <h1>{{lorem}}</h1>
    <h2>{{lorem}}</h2>
    <h3>{{lorem}}</h3>
    <div class="utility">{{lorem}}</div>
    <p>{{lorem}}</p>
    <p class="large">{{lorem}}</p>
    <div class="button">{{lorem}}</div>
    <a href="#">{{lorem}}</a>
    <a class="small" href="#">{{lorem}}</a> -->
    <splash />
  </div>
</template>

<script>
import splash from './splash'
export default {
  data () {
    return {
      lorem: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    splash
  }
}
</script>
