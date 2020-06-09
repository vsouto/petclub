import Vue from 'vue';
import Vuex from 'vuex';

import user from "@/store/user"
import product from "@/store/product"
import service from "@/store/service"
import client from "@/store/client"
import animal from "@/store/animal"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
      barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      drawer: null,
    },
    mutations: {
      SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
      },
      SET_DRAWER (state, payload) {
        state.drawer = payload
      },
    },
    actions: {},
    modules: {
      user,
      product,
      service,
      client,
      animal
    },
});
