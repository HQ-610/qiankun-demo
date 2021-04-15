import store from "./store";

class Shared {
    getGlobalStore = () => {
        const state = store.getState();
        return state;
    }

    setGlobalStore = (type, payload) => {
        store.dispatch({
            type,
            payload
        });
    }
}

const shared = new Shared();
export default shared;
