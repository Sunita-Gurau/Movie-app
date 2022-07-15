import { createWebHistory, createRouter } from 'vue-router'
import DetailPage from "./Pages/DetailPage.vue";
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
        path: '/movie_id/:movieId',
        component: DetailPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

// movies?page=2
// movies/2