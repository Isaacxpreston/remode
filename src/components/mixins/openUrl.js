export default {
  props: ['url'],
  methods: {
    openUrl (url) {
      if (url) window.open(url, '_blank')
    }
  }
}