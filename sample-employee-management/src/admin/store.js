import Vuex from 'vuex';

import { CoreModule } from "../shared/store/core-module";
import axios from 'axios';

export default new Vuex.Store({
    modules: {
        coreModule: CoreModule
    },
    actions: {
        adminLogin: function ({ commit }, accountId) {
            return axios
                .post("/adminLogin", null, {
                    params: {
                        accountId: accountId
                    }
                })
                .then(res => {
                    if (res.data === "") {
                        alert("아이디를 확인해 주세요");
                        throw "invalid username";
                    }
                    commit("coreModule/SET_CURRENT_EMPLOYEE", res.data);
                });
        }
    }
});
