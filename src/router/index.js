import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Dashboard from '../components/Dashboard.vue'
import Cards from '../components/Cards.vue'
import Create_deck from '../components/Create_deck.vue'
import Create_card from '../components/Create_card.vue'
import Update_deck from '../components/Update_deck.vue'
import Update_card from '../components/Update_card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/create_deck',
    name: 'Create_deck',
    component: Create_deck
  },
  {
    path: '/create_card',
    name: 'Create_card',
    component: Create_card
  },
  {
    path: '/update_deck',
    name: 'Update_deck',
    component: Update_deck
  },
  {
    path: '/update_card',
    name: 'Update_card',
    component: Update_card
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
