import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {foundSeries: [], selectedSearchResult: null, isSearching: false, searchStarted: false}

const searchResults = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
  case 'RECIEVE_SEARCH_RESULTS':
    return {
      ...state,
      selectedSearchResult: state.selectedSearchResult,
      foundSeries: action.searchResults,
    }
  case 'RECIEVE_SELECTED_SEARCH_RESULT':
    return {
      ...state,
      selectedSearchResult: action.selectedSearchResult,
      isSearching: false,
    }
  case 'CLOSE_SELECTED_SHOW':
    return {
      ...state,
      selectedSearchResult: null,
    }
  case 'CLEAR_SEARCH_RESULTS':
    return {
      ...state,
      foundSeries: [],
    }
  case 'IS_SEARCHING':
    return {
      ...state,
      isSearching: !state.isSearching,
    }

  case 'TOGGLE_SEARCH':
    return {
      ...state,
      searchStarted: !state.searchStarted,
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
      action.show,
    ]
  case 'POPULATE_STORE':
    console.log('populating store...', action)
    return [
      ...state,
      ...action.allSeries,
    ]
  default:
    return state
  }
}

const store = createStore(combineReducers({searchResults, series}), applyMiddleware(thunkMiddleware))

export default store
