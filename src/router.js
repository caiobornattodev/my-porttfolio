import { createRouter, createWebHistory } from "vue-router";

import AboutMePage from "./pages/AboutMePage.vue";
import TecnologiesPage from "./pages/TecnologiesPage.vue";
import ExperiencesPage from "./pages/ExperiencesPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/aboutMe' },
        { path: '/aboutMe', component: AboutMePage },
        { path: '/tecnologies', component: TecnologiesPage },
        { path: '/experiences', component: ExperiencesPage }
    ]
});


export default router 