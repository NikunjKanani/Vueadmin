import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

Vue.config.performance = true
Vue.use(CoreuiVue)

new Vue({
  el: '#app',
  router,
  icons,
  store,
  template: '<App/>',
  components: {
    App
  },
  methods:{
    addUser(){
      this.dataTable.row.add([
          this.id,
          '<a href="#">'+this.name+'</a>',
          this.email
        ]).draw(false)
        this.id='';
          this.name='';
          this.email='';
    }
  },
  mounted(){
    let users = [];

    this.dataTable = $('#user-table').DataTable({});
const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
          users.push(item);
      });
    
               users.forEach(user=>{
        this.dataTable.row.add([
          user.id,
          '<a href="#">'+user.name+'</a>',
          user.email
        ]).draw(false) 
        })
    })
  }
})
