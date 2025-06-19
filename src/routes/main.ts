import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/view/HomeView.vue";
import SearchPokemon from "@/components/SearchPokemon.vue";
import RandomPokemon from "@/components/RandomPokemon.vue";
import FilterPokemon from "@/components/FilterPokemon.vue";
import HeroComponent from "@/components/HeroComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView,
      children: [
        { path: '/', name: 'home', component: HeroComponent },
        { path: '/search', name: 'search', component: SearchPokemon },
        { path: '/random', name: 'random', component: RandomPokemon },
        { path: '/types', name: 'types', component: FilterPokemon },
      ]
    }
  ]
})

export default router
