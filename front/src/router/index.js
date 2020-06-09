import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

/** Route Guards **/
import RouteGuard from "@/utils/route-guard"
import { fetchClients } from "./guards/fetch-clients"
import { fetchProducts } from "./guards/fetch-products"
import { fetchServices } from "./guards/fetch-services"
import { fetchUsers } from "./guards/fetch-users"
import { fetchAnimals } from "./guards/fetch-animals"
import { isAuthorized } from "./guards/is-authorized"

Vue.use(VueRouter);

const routes = [
  {
    path: "/404",
    component: import('@/views/dashboard/pages/404'),
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/",
    component: () => import('@/views/dashboard/Index'),
    beforeEnter: RouteGuard([
      isAuthorized,
    ]),
    children: [
      // Dashboard
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/Dashboard'),
      },
      // Clients
      {
        name: 'Clients',
        path: 'clients',
        component: () => import('@/views/Clients/ClientList'),
        beforeEnter: RouteGuard([
          fetchClients
        ]),
      },
      {
        path: "clients/create",
        name: "ClientsCreate",
        component: () => import('@/views/Clients/ClientCreate'),
      },
      {
        path: "clients/:id",
        name: "ClientsInfo",
        component: () => import('@/views/Clients/ClientInfo'),
      },
      // Animals
      {
        name: 'Animals',
        path: 'animals',
        component: () => import('@/views/Animals/AnimalList'),
        beforeEnter: RouteGuard([
          fetchAnimals
        ]),
      },
      {
        path: "animals/create",
        name: "AnimalsCreate",
        component: () => import('@/views/Animals/AnimalCreate'),
      },
      {
        path: "animals/:id",
        name: "AnimalsInfo",
        component: () => import('@/views/Animals/AnimalInfo'),
      },
      // Services
      {
        name: 'Services',
        path: 'services',
        component: () => import('@/views/Services/ServiceList'),
        beforeEnter: RouteGuard([
          fetchServices
        ]),
      },
      {
        path: "services/create",
        name: "ServicesCreate",
        component: () => import('@/views/Services/ServiceCreate'),
      },
      {
        path: "services/:id",
        name: "ServicesInfo",
        component: () => import('@/views/Services/ServiceInfo'),
      },
      // Products
      {
        name: 'Products',
        path: 'products',
        component: () => import('@/views/Products/ProductList'),
        beforeEnter: RouteGuard([
          fetchProducts
        ]),
      },
      {
        path: "products/create",
        name: "ProductsCreate",
        component: () => import('@/views/Products/ProductCreate'),
      },
      {
        path: "products/:id",
        name: "ProductsInfo",
        component: () => import('@/views/Products/ProductInfo'),
      },
      // Users
      {
        name: 'Users',
        path: 'users',
        component: () => import('@/views/Users/UserList'),
        beforeEnter: RouteGuard([
          fetchUsers
        ]),
      },
      {
        path: "users/create",
        name: "UsersCreate",
        component: () => import('@/views/Users/UserCreate'),
      },
      {
        path: "users/:id",
        name: "UsersInfo",
        component: () => import('@/views/Users/UserInfo'),
      }
    ],
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
