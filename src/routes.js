import { createWebHistory, createRouter } from 'vue-router'
import MovieCard from "./components/MovieCard.vue";
import DetailPage from "./components/DetailPage.vue";
import PaginationPage from "./components/DetailPage.vue";



const routes = [
    {
        name: 'Home',
        path: '/',
        component: MovieCard
    },
    {
        name: 'MovieCard',
        path: '/movies',
        component: MovieCard
    },
    {
        name: 'DetailPage',
        path: '/movie/:movieId',
        component: DetailPage
    },
    {
        name: 'PaginationPage',
        path: '/PaginationPage',
        component: PaginationPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 