import Vue from 'vue'
import Router from 'vue-router'
import workbench from '@/pages/workbench/workbench'
import radar from '@/pages/radar/radar'
import task from '@/pages/radar/components/task'
import create from '@/pages/radar/components/create'
import message from '@/pages/message/message'
import customer from '@/pages/customer/customer'
import user from '@/pages/user/user'
import newx from '@/pages/newx'
import aa from '@/aa'
import qunfa from '@/pages/message/components/qunfa'
import session from '@/pages/message/components/session'
import Daily from '@/pages/radar/components/daily'
import chakan from '@/pages/radar/components/chakan'
import cjsj from '@/pages/radar/components/cjsj'
import follow from '@/pages/radar/components/follow'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'radar',
      component: radar
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: workbench
    },
    {
      path: '/message',
      name: 'message',
      component: message,
    },
    {
      path: '/qunfa',
      name: 'qunfa',
      component: qunfa,
    },
  
    {
      path: '/session',
      name: 'session',
      component: session
    },
    {
      path:'/task',
      name:'task',
      component:task
    },
    {
      path:'/cjsj',
      name:'cjsj',
      component:cjsj
    },
    {
      path:'/follow',
      name:'follow',
      component:follow
    },
 
    {
      path: '/customer',
      name: 'customer',
      component: customer
    },{
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/newx',
      name: 'newx',
      component: newx
    },
    {
      path: '/chakan',
      name: 'chakan',
      component: chakan
    },
    {
      path: '/a',
      name: 'a',
      component:aa
    },
    {
      path: '/create',
      name: 'create',
      component:create
    },
    {
      path: '/daily',
      name: 'daily',
      component:Daily
    },
  ]
})
