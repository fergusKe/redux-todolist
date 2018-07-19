import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';

function* getInitList() {
  try {
    const res = yield axios.get('/data/list.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('list.json fetch fail');
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
