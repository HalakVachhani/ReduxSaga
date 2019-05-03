import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getPostRequest: null,
    getPostSuccess: ['respuesta'],
    getPostFailure: ['error']
})

export const PostTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    posts: [],
    status: '',
    fetching: true,
    errorMessage: '',
    error: false
})

/* ------------- Reducers ------------- */
export const getPostRequest = (state, action) => {
    const { tipo } = action
    return state.merge({ fetching: true, error: false, errorMessage: '' })
}

export const getPostSuccess = (state, action) => {
    console.log("getCocktailsSuccess")
    console.log(action.respuesta)
    return state.merge({ fetching: false, error: false, errorMessage: '', posts: action.respuesta })
}

export const getPostFailure = (state, action) => {
    return state.merge({ fetching: false, error: true, errorMessage: action.error })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_POST_REQUEST]: getPostRequest,
    [Types.GET_POST_SUCCESS]: getPostSuccess,
    [Types.GET_POST_FAILURE]: getPostFailure
})
