import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import store from '../store/store'
import {populateStore} from '../store/actions'

const rootElement = document.getElementById('main-container')
const render = () => {
  console.log(store.getState())

  let state = store.getState()

  ReactDOM.render(
    <Root
      dispatch={store.dispatch}
      searchResults={state.searchResults}
      series={state.series}
    />,
    rootElement)
}

store.subscribe(render)
render()
store.dispatch(populateStore())
