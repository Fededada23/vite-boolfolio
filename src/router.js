
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'project_list',
            component: ProjectList
        },


        {

            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },


        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
    ]
})



export { router };