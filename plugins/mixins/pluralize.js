import Vue from 'vue'
import pluralize from 'pluralize'

const Pluralize = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        pluralize: pluralize
      }
    })
  }
}

Vue.use(Pluralize)
