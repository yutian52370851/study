import home from '@/home'
import HomePage from '@/pages/HomePage'
import DataSciencePage from '@/pages/DataSciencePage'

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
	   path:'/dataSciencePage',
	   name:'DataSciencePage',
	   component:DataSciencePage
    }
  ]
}
