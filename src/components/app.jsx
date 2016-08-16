import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import store from '../store/store'

const rootElement = document.getElementById('main-container')
const render = () => {
  let state = store.getState()

  ReactDOM.render(
    <Root
      dispatch={store.dispatch}
      searchResults={state.searchResults}
      series={state.series}
    />,
    rootElement)
}

const serializeStore = () => {
  window.localStorage.setItem('TV_SERIES_RANDOMIZER', JSON.stringify(store.getState()))
}

store.subscribe(render)
store.subscribe(serializeStore)
render()
