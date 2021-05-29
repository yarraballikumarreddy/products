import { ActionType } from "../Constant"

export const getproduct = (data) => {
    return {
        type: ActionType.get_product,
        payload:data
    }
}
export const selectedProduct = (product) => {
    return {
      type: ActionType.SELECTED_PRODUCT,
      payload: product,
    };
  };
  export const removeSelectedProduct = () => {
    return {
      type: ActionType.REMOVE_SELECTED_PRODUCT,
    };
  };