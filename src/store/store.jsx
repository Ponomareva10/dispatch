import { combineReducers, createStore } from 'redux';
import { CashReducer } from '../reducer/CashReducer';
import { UserReducer } from '../reducer/UserReducer';

const rootReducer = combineReducers({
    cash: CashReducer,
    user: UserReducer,
})

export const store = createStore(rootReducer);