import { combineReducers } from 'redux'
import { producReducer ,selectedProductsReducer} from "../Reducer/ProductReducer"

const rootReducer  = combineReducers({
    allProducts: producReducer,
    product: selectedProductsReducer,
})
export default rootReducer
