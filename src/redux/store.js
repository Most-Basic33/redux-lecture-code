import {createStore, combineReducers, applyMiddleware} from 'redux' ;// create store
import reducer from './reducer';
import pokeReducer from './pokeReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    reducer,
   pokeReducer
})


//Enabling middleware so i can make an axios call 
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));  