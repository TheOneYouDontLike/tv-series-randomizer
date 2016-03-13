import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import store from '../store/store'
// import {addSeries} from '../store/actions'
// import request from 'superagent'

const rootElement = document.getElementById('main-container')
const render = () => {
  console.log(store.getState())

  let state = store.getState()

  ReactDOM.render(
    <Root
      dispatch={store.dispatch}
      searchResults={state.searchResults}
      watchingSeries={state.series}
    />,
    rootElement)
}

store.subscribe(render)
render()

// request
//   .get('api/series')
//   .end((error, data) => {
//     if (data.body) {
//       console.log('first request')
//       store.dispatch(addSeries(data.body))
//     }
// })
