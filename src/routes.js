import Login from './Login.vue' ;
import Home from './Home.vue'
import Signup from './Signup.vue'
import Docs from './Docs.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/section-3', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/docs', component: Docs }
]