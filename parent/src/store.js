import { createStore } from 'redux'
import microAppStateActions from './microAppStateActions'

const initialState = { name: 'hjh', age: 18 };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case 'changeName':
            newState = { ...state, name: action.payload };
            microAppStateActions?.setGlobalState(newState)
            return newState
        case 'changeAge':
            newState = { ...state, age: action.payload };
            microAppStateActions?.setGlobalState(newState)
            return newState
        default:
            return state
    }
}
const store = createStore(reducer)

export default store