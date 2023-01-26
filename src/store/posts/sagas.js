import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import { actionType } from './ducks'
import postsblogPostApi from "../../server/api"

function* addPost(action) {
    try {
        const postResponse = yield call(postsblogPostApi.add, action.payload)

        yield put({ type: actionType.ADD_POST_SUCCESS, payload: postResponse })
    } catch (err) {
        yield put({ type: actionType.ADD_POST_ERROR, payload: 'Ocorrreu um erro!' })
    }
}

function* fetchPosts() {
    try {
        const data = yield call(postsblogPostApi.getAll)

        yield put({ type: actionType.FETCH_POSTS_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: actionType.FETCH_POSTS_ERROR, payload: 'Ocorrreu um erro!' })
    }
}

export default function* rootSaga() {
    yield takeEvery(actionType.ADD_POST, addPost)
    yield takeLatest(actionType.FETCH_POSTS, fetchPosts)
}
