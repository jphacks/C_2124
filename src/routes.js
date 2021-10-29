import One from './pages/one';
import Two from './pages/two';
import Analysis from './pages/analysis';
const routes = [
    { path: '/', component: One, exact : true },
    { path: '/two', component: Two,},
    { path: '/analysis', component: Analysis,},
  ];
  
  export default routes;