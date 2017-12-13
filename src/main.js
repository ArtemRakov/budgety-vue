import Vue from 'vue'
import App from './App.vue'

Vue.filter('plus', function (value) {
  var abs = Math.abs(value)
  var number = abs.toFixed(2)
  var numSplit = number.split('.')
  var int = numSplit[0]
  var dec = numSplit[1]

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3)
  }

  return (value < 0 ? '-' : '+') + ' ' + int + '.' + dec
})

Vue.filter('itemShow', function (item) {
  var number = item.value.toFixed(2)
  var numSplit = number.split('.')
  var int = numSplit[0]
  var dec = numSplit[1]

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3)
  }
  
  return (item.type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec
})

new Vue({
  el: '#app',
  render: h => h(App)
})
