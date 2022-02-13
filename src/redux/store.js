import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
 
import pokeReducer from './pokeDuck'
import taskReducer from './taskDuck';
 
const rootReducer = combineReducers({
    pokemons: pokeReducer,
    tasks: taskReducer
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}