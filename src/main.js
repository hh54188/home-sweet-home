import Vue from 'vue'
import App from './components/App.vue'
import store from './stores/Store.js'

new Vue({
    el: '#app',
    store,
    render: h => h(App) // h究竟是什么东西？
})