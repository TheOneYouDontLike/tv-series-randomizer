import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const localStorageInitialState = window.localStorage.getItem('TV_SERIES_RANDOMIZER')
const searchResultsInitialState = localStorageInitialState ? JSON.parse(localStorageInitialState).searchResults :
  {foundSeries: [], selectedSearchResult: null, isSearching: false, searchStarted: false}
const seriesInitialState = localStorageInitialState ? JSON.parse(localStorageInitialState).series : []

const searchResults = (state = searchResultsInitialState, action) => {
  console.log(action)
  switch (action.type) {
  case 'RECEIVE_SEARCH_RESULTS':
    return {
      ...state,
      selectedSearchResult: state.selectedSearchResult,
      foundSeries: action.searchResults,
      isSearching: false,
    }
  case 'RECEIVE_SELECTED_SEARCH_RESULT':
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
    if (!state.searchStarted) {
      return {
        ...state,
        searchStarted: true,
      }
    }

    return {
      ...state,
      foundSeries: [],
      isSearching: false,
      searchStarted: false,
      selectedSearchResult: null,
    }

  default:
    return state
  }
}

const showReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ASSIGN_SELECTED_EPISODE':
    return {
      ...state,
      randomEpisode: action.randomEpisode,
    }
  default:
    return state
  }
}

const series = (state = seriesInitialState, action) => {
  switch (action.type) {
  case 'ADD_TO_WATCHING':
    if (state.some(show => show.imdbID === action.show.imdbID)) {
      return state
    }

    return [
      ...state,
      action.show,
    ]
  case 'ASSIGN_SELECTED_EPISODE':
    if (!state.some(show => show.imdbID === action.imdbId)) {
      return state
    }

    const foundShow = state.find(show => show.imdbID === action.imdbId)

    return [
      ...state.filter(show => show.imdbID !== action.imdbId),
      showReducer(foundShow, action),
    ]
  // OBSOLETE ?
  case 'POPULATE_STORE':
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
