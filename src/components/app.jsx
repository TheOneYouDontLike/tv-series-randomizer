import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Root from './root'

const series = (state = [], action) => {
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

const store = createStore(series)

const rootElement = document.getElementById('main-container')
const render = () => ReactDOM.render(<Root store={store} />, rootElement)

store.subscribe(render)
render()
