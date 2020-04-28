import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.application').appendChild(document.createElement('application'))
  const app = new Vue({
    el,
    render: h => h(App)
  })
  console.log(app)
})
