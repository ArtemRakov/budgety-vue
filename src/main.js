import Vue from 'vue'
import App from './App.vue'

Vue.filter('plus', function (value) {
  if (value > 0) {
    return '+ ' + value
  }
  else {
    return value
  }
})

Vue.filter('itemShow', function (item) {
  if (item.type === 'exp') {
    return '- ' + item.value
  }
  else {
    return '+ ' + item.value
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
