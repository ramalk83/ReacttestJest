import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares=[ReduxThunk];
const createStoreMiddleware=applyMiddleware(...middlewares)
export default createStoreMiddleware(rootReducer);