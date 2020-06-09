import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// @ts-ignore
import vuetify from '@/plugins/vuetify'; // path to vuetify export

import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
    // @ts-ignore
    vuetify,
    i18n,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
