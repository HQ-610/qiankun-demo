import { createStore } from 'redux'

const initialState = { creator: { name: '创作中心' } };

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
const store = createStore(reducer)

export default store