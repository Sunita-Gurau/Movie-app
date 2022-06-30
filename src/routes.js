import { createWebHistory, createRouter } from 'vue-router'
import DetailPage from "./components/DetailPage.vue";
import MoviesPage from "./Pages/Movies.vue";



const routes = [
    {
        name: 'Home',
        path: '/',
        component: MoviesPage
    },
    {
        name: 'MovieCard',
        path: '/movies',
        component: MoviesPage
    },
    {
        name: 'DetailPage',
        path: '/movie/:movieId',
        component: DetailPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 