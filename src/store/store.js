import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'RECIEVE_SEARCH_RESULTS':
      return action.searchResults
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
