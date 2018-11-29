import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'

//Goods
import Sale from '@/views/Sale/Sale'
// 结算与预定
import setAndRes from '@/views/Sale/setAndRes'

//Detail
import Detail from '@/views/Sale/Detail'
//Warehouse
import Warehouse from '@/views/Warehouse/Warehouse'
import warehousein from '@/views/Warehouse/warehousein'
//My
import Finance from '@/views/Finance/Finance'
//My
import Me from '@/views/Me/Me'

import ClientList from '@/views/Me/ClientList'
import Maintenance from '@/views/Me/Maintenance'
import StaffList from '@/views/Me/StaffList'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/Warehouse',
      name: 'Warehouse',
      component: Warehouse
    },
    {
      path: '/warehousein',
      name: 'warehousein',
      component: warehousein
    },
    {
      path: '/Finance',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/setAndRes',
      name: 'setAndRes',
      component: setAndRes
    },{
      path: '/ClientList',
      name: 'ClientList',
      component: ClientList
    },{
      path: '/Maintenance',
      name: 'Maintenance',
      component: Maintenance
    },{
      path: '/StaffList',
      name: 'StaffList',
      component: StaffList
    }

  ]
})
