import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData } from "../actions";
import { fetchData } from "../api";

// Worker
function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

// Watcher
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
