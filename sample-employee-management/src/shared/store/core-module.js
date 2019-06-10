import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex)

export const CoreModule = {
    namespaced: true,
    state: {
        currentEmployee: undefined,
    },
    mutations: {
        SET_CURRENT_EMPLOYEE(state, employee) {
            state.currentEmployee = employee;
        },
    },
    actions: {
        refreshCurrentEmployee({ commit }, accountId) {
            return axios.get(`/employee/${accountId}`)
                .then((res) => {
                    commit("SET_CURRENT_EMPLOYEE", res.data);
                });
        },
    }
}
