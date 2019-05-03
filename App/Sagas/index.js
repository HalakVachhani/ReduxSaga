import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import { CocktailsTypes } from '../Redux/HomeReducer'
import { PostTypes } from '../Redux/PostReducer'

/* ------------- Sagas ------------- */
import { getAllCocktails } from './HomeSagas'
import { getAllPosts } from './PostSagas'

/* ------------- API ------------- */
const apiHome = API.createHome()
const apiPost = API.createPost()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    console.log("SAGA ROOT INDEX")
    yield all([
        takeLatest(CocktailsTypes.GET_COCKTAILS_REQUEST, getAllCocktails, apiHome),
        takeLatest(PostTypes.GET_POST_REQUEST, getAllPosts, apiPost),
    ])
}
