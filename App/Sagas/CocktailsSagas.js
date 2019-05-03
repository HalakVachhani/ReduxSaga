import { call, put } from 'redux-saga/effects'
import CocktailsActions from '../Redux/CocktailReducer'

export function* getAllCocktails(api, action) {
    console.log("getAllCocktails ::")
    try {
        const response = yield call(api.getCocktails)
        console.log("response api ::")
        console.log(response.data)
        if (response.ok) {          
            yield put(CocktailsActions.getCocktailsSuccess(response.data))
        } else {
            yield put(CocktailsActions.getCocktailsFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(CocktailsActions.getCocktailsFailure(error.message))
    }
}


