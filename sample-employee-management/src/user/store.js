import Vuex from 'vuex';
import axios from 'axios';

import { CoreModule } from "../shared/store/core-module";

export default new Vuex.Store({
    modules: {
        coreModule: CoreModule,
    },
    actions: {
        login({ commit }, accountId) {
            return axios.post("/login", null, {
                params: {
                    accountId: accountId
                }
            }).then((res) => {
                if (res.data === "") {
                    alert("아이디를 확인해 주세요");
                    return;
                }
                commit("coreModule/SET_CURRENT_EMPLOYEE", res.data);
            });
        },
    }
});
