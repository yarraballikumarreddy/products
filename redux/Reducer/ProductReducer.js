import {ActionType} from "../Constant"
const intialState = {
    products: [],
  };
export const producReducer = (state = intialState, { type, payload }) => {
    console.log(type,payload ,"kumar")
    switch (type) {

        case ActionType.get_product:
            return { ...state, products: payload };
        default:
            return state
           
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionType.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionType.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };