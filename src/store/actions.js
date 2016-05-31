import request from 'superagent'
import userPersistence from './userPersistence'

export function search (name) {
  const receiveSearchResults = searchResults => {
    return {type: 'RECEIVE_SEARCH_RESULTS', searchResults}
  }

  return dispatch => {
    request
      .get(`api/search/${name}`)
      .end((error, data) => {
        if (error || !data.body) {
          console.log(error)
          dispatch(receiveSearchResults([]))
          return
        }
        dispatch(receiveSearchResults(data.body))
      })
  }
}

export function selectShow (imdbId) {
  const receiveSelectedSearchResult = selectedSearchResult => {
    return {type: 'RECEIVE_SELECTED_SEARCH_RESULT', selectedSearchResult}
  }

  return dispatch => {
    request
      .get(`api/series/${imdbId}`)
      .end((error, data) => {
        if (error || !data.body) {
          alert(error)
          return
        }

        dispatch(receiveSelectedSearchResult(data.body))
      })
  }
}

export function addToWatching (show) {
  userPersistence.add(show)

  return {type: 'ADD_TO_WATCHING', show}
}

export function populateStore () {
  const allSeries = userPersistence.getAll()

  return {type: 'POPULATE_STORE', allSeries}
}

export function closeSelectedShow () {
  return {type: 'CLOSE_SELECTED_SHOW'}
}

export function clearSearchResults () {
  return {type: 'CLEAR_SEARCH_RESULTS'}
}

export function isSearching () {
  return {type: 'IS_SEARCHING'}
}

export function toggleSearch () {
  return {type: 'TOGGLE_SEARCH'}
}
