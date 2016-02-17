import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {foundSeries: [], selectedSeries: null}

const searchResults = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'RECIEVE_SEARCH_RESULTS':
      return {
        selectedSeries: state.selectedSeries,
        foundSeries: action.searchResults
      }
    case 'RECIEVE_SELECTED_SERIES':
      return {
        ...state,
        selectedSeries: action.series
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
