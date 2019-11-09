import Vue from 'vue'
import VueRouter from 'vue-router'
import BodyClass from 'vue-body-class'

//router-viewと切り替わるコンポーネントをインポートする
import TopContainer from './components/organisms/TopContainer.vue'
import CommonHeader from './components/organisms/CommonHeader.vue'
import CommonContainer from './components/organisms/CommonContainer.vue'
import CommonFooter from './components/organisms/CommonFooter.vue'

Vue.use(VueRouter)

const routes = [
  {
    //トップページ
    path: '/',
    components: {
      contents : TopContainer
    }
  },
  {
    //共通ページ
    path: '/game',
    meta: { bodyClass: 'page-common' },
    components: {
      header : CommonHeader,
      contents: CommonContainer,
      footer : CommonFooter
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(BodyClass, router)

export default router