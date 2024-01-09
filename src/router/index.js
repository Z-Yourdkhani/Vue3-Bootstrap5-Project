import { createRouter, createWebHistory } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import PageRegister from "../pages/PageRegister.vue";
import PageOne from "../pages/PageOne.vue";
import PageTwo from "../pages/PageTwo.vue";
import PageThree from "../pages/PageThree.vue";
import PageNotFound from "../pages/PageNotFound"

const routes = [
    { path: "/login", component: PageLogin },
    { path: "/register", component: PageRegister },
    { path: "/page1", component: PageOne },
    { path: "/page2", component: PageTwo },
    { path: "/page3", component: PageThree },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;