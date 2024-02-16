import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Us from "../views/Us.vue";
// import ContactUs from "../views/ContactUs.vue";
// import PQRs from "../views/Pqrs.vue";

const routes=[
    {
        component: Home,
        path: '/:pathMatch(.*)'
    },
    // {
    //     path: '/us',
    //     name: 'Solpro',
    //     component: Us,
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact Us',
    //     component: ContactUs,
    // },
    // {
    //     path: '/pqrs',
    //     name: 'PQRs',
    //     component: PQRs,
    // }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router