import { call, put } from 'redux-saga/effects'
import PostActions from '../Redux/PostReducer'

export function* getAllPosts(api, action) {
    console.log("getAllPosts ::")
    try {
        const response = yield call(api.getPosts)
        console.log("response api ::")
        console.log(response.data)
        if (response.ok) {          
            yield put(PostActions.getPostSuccess(response.data))
        } else {
            yield put(PostActions.getPostFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(PostActions.getPostFailure(error.message))
    }
}


