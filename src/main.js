import Vue from 'vue'
import App from './App.vue'

//=> wont run until the value exists

Vue.filter ('wordReturn', (value) => {
    return value + ' (' + value.length + ') ';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
