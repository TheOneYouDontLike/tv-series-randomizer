import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import Root from './root'
import request from 'superagent'

const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      return [
        'series1',
        'series2'
      ]
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

const store = createStore(combineReducers({searchResults, series}))

const rootElement = document.getElementById('main-container')
const render = () => {
  console.log(store.getState())
  ReactDOM.render(<Root store={store} />, rootElement)
}

store.subscribe(render)
render()

request.get('/series').end((error, data) => {
  store.dispatch({type: 'ADD', series: data.body})
})
