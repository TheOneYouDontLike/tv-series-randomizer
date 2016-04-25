import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {foundSeries: [], selectedSearchResult: null}

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
  case 'CLOSE_SELECTED_SHOW':
    return {
      ...state,
      selectedSearchResult: null
    }
  default:
    return state
  }
}

const series = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_WATCHING':
    if (state.some(show => show.imdbID === action.show.imdbID)) {
      return state
    }

    return [
      ...state,
      action.show
    ]
  case 'POPULATE_STORE':
    console.log('populating store...', action)
    return [
      ...state,
      ...action.allSeries
    ]
  default:
    return state
  }
}

const store = createStore(combineReducers({searchResults, series}), applyMiddleware(thunkMiddleware))

export default store
