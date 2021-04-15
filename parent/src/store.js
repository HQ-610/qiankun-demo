import { createStore } from 'redux'

const initialState = { name: 'hjh', age: 18 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'changeName':
            return { ...state, name: action.payload };
        case 'changeAge':
            return { ...state, age: action.payload };
        default:
            return state
    }
}
const store = createStore(reducer)

export default store