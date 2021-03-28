import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './ChildComponent.vue';

Vue.component('child', ChildComponent)  // global component

new Vue({
  el: '#app',
  render: h => h(App)
})
