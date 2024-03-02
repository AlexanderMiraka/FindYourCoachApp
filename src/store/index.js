import coachModule from "./modules/coachModule";

import { createStore } from "vuex";


const store = createStore ({
    modules: {
        coaches:coachModule,
    }
});

export default store;