import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from "../redux/Reducer/index"
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store