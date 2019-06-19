import * as actionType from "../actions/actionTypes";

const initialState = {
  image: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_IMAGE_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_IMAGE_OKAY:
      return {
        ...state,
        image: action.imageUrl,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
