import coachModule from "./modules/coachModule";
import requestsModule from "./modules/requestsModule";
import { createStore } from "vuex";


const store = createStore ({
    modules: {
        coaches:coachModule,
        requests:requestsModule
    },
    state() {
        return {
            userId:'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;