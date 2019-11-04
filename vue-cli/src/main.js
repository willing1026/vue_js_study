import Vue from 'vue'

//컴포넌트 파일
import App from './App.vue'
// var App = {
//   template: '<div>app</div>'
// }

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//.$mount('#app')  => el 엘리먼트 역할.
// 위와 같은 내용. (render 제외하고)
// new Vue({
//   el: '#app'
//   components: {
//   'app': App
//  }
// })