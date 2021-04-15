import { createStore } from 'redux'

const initialState = { creator: { apply: 1 } };

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
const store = createStore(reducer)

export default store