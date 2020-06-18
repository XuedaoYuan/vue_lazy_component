import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.styl'

import vueLazyComponent from '@xunlei/vue-lazy-component'
Vue.use(vueLazyComponent)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
/* import Vue from '../node_modules/vue/src/platforms/web/entry-runtime-with-compiler'
new Vue({
	data() {
		return {
			message: 'Hello vue'
		}
	}
}).$mount('#app') */
