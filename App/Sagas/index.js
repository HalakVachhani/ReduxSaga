import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import { CocktailsTypes } from '../Redux/CocktailReducer'

/* ------------- Sagas ------------- */
import { getAllCocktails } from './CocktailsSagas'

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    console.log("SAGA ROOT INDEX")
    yield [
        takeLatest(CocktailsTypes.GET_COCKTAILS_REQUEST, getAllCocktails, api),
    ]
}
