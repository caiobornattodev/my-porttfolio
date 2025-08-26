import { createRouter, createWebHistory } from "vue-router";

import AboutMePage from "./pages/AboutMePage.vue";
import TecnologiesPage from "./pages/TecnologiesPage.vue";
import ExperiencesPage from "./pages/ExperiencesPage.vue";
import GraduationsPage from "./pages/GraduationsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/aboutMe' },
        { path: '/aboutMe', component: AboutMePage },
        { path: '/tecnologies', component: TecnologiesPage },
        { path: '/experiences', component: ExperiencesPage },
        { path: '/graduations', component: GraduationsPage}
    ]
});


export default router 