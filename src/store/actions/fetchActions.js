import * as actionType from "./actionTypes";

export const fetch_start = () => ({ type: actionType.GET_IMAGE_START });
export const fetch_fail = () => ({ type: actionType.GET_IMAGE_FAIL });
export const fetch_okay = imageUrl => ({
  type: actionType.GET_IMAGE_OKAY,
  imageUrl,
});
