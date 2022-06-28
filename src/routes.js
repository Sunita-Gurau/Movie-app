import { createWebHistory, createRouter } from 'vue-router'
import MovieCard from "./components/MovieCard.vue";
import DetailPage from "./components/DetailPage.vue";


const routes = [
    {
        name: 'MovieCard',
        path: '/',
        component: MovieCard
    },
    {
        name: 'DetailPage',
        path: '/DetailPage',
        component: DetailPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router