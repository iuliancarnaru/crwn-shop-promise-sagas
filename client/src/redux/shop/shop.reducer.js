// import { SHOP_DATA } from "./shop.data";
import ShopActionTypes from "./shop.types";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
