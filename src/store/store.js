import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {foundSeries: [], selectedSearchResult: {}}

const searchResults = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'RECIEVE_SEARCH_RESULTS':
      return {
        selectedSearchResult: state.selectedSearchResult,
        foundSeries: action.searchResults
      }
    case 'RECIEVE_SELECTED_SEARCH_RESULT':
      return {
        ...state,
        selectedSearchResult: action.selectedSearchResult
      }
    default:
      return state
  }
}

const series = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        ...action.series
      ]
    default:
      return state
  }
}

const store = createStore(combineReducers({searchResults, series}), applyMiddleware(thunkMiddleware))

export default store
