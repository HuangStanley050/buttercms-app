import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { fetch_fail, fetch_okay } from "../actions/fetchActions";
//https://api.unsplash.com/
// import fs from "fs";
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
const query = "mountain";

const api = `https://api.unsplash.com/photos/random/?client_id=${
  process.env.REACT_APP_UNSPLASH_ID
}&query=${query}`;

function* fetchWorker(action) {
  try {
    let result = yield axios.get(api);

    yield put(fetch_okay(result.data.urls.regular));
  } catch (err) {
    console.log(err);
  }
}

function* fetchWatcher() {
  yield takeEvery(actionType.GET_IMAGE_START, fetchWorker);
}

export default fetchWatcher;
