import Vue from 'vue'   
import Router from 'vue-router'  
import HelloWorld from '@/components/HelloWorld'  
import Hi1 from '@/components/Hi1' 
import Count from '@/components/Count' 
 
Vue.use(Router) 
 
export default new Router({
  mode:'history',
  routes: [             
    {                    
      path: '/',        
      name: 'HelloWorld',
      component: HelloWorld
    },{                                      
      path:'/count',
      component:Count
    },{
      path:'/Hi1',
      component:Hi1
    }
  ]
})
