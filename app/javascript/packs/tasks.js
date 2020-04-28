import Vue from 'vue'
import App from '../app.vue'
import axios from 'axios'
import store from '../store'

Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}
Vue.prototype.$axios.defaults.baseURL = '/'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.application').appendChild(document.createElement('application'))
  const app = new Vue({
    el,
    store,
    render: h => h(App)
  })
  console.log(app)
})
