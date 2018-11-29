import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api/api'
import Vant from 'vant'
import 'vant/lib/index.css'
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZh from './lang/zh'

import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.prototype.$req = Api;

Vue.use(Vant);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh',
    messages:{
        'en': LangEn,
        'zh': LangZh,
    }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
