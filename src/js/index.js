var Vue = require('vue');
Vue.config.debug = true;

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  }
});
