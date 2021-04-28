import Vue from 'vue'
import uView from '@/components/uview-ui_1.8.3';
import services from './services';
import utils from './utils';
import configs from './configs';
import App from './App.vue'
import store from './store'

Vue.use(uView);
Vue.use(services);
Vue.use(utils);
Vue.use(configs);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({ ...App,
	store
})
app.$mount()
