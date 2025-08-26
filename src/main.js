import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import AboutMePage from './pages/AboutMePage.vue';
import TecnologiesPage from './pages/TecnologiesPage.vue';
import ExperiencesPage from './pages/ExperiencesPage.vue';
import ContainerBox from './components/ContainerBox.vue';
import GraduationsPage from './pages/GraduationsPage.vue';

import { OhVueIcon,addIcons } from 'oh-vue-icons';
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as IoIcons from "oh-vue-icons/icons/io"


const app = createApp(App);
app.use(router)

//Pages
app.component('about-me-page', AboutMePage)
app.component('tecnoloies-page', TecnologiesPage)
app.component('experiences-page', ExperiencesPage)
app.component('graduations-page',GraduationsPage)

//Components
app.component('container-box',ContainerBox);

//Icons
const Fa = Object.values({ ...FaIcons });
const Io = Object.values({...IoIcons})
addIcons(...Fa,...Io);

app.component('v-icon',OhVueIcon)

app.mount('#app')
