import request from 'superagent'
import userPersistence from './userPersistence'

export function search (name) {
  const recieveSearchResults = searchResults => {
    return {type: 'RECIEVE_SEARCH_RESULTS', searchResults}
  }

  return dispatch => {
    request
      .get(`api/search/${name}`)
      .end((error, data) => {
        if (error || !data.body) {
          console.log(error)
          dispatch(recieveSearchResults([]))
          return
        }
        dispatch(recieveSearchResults(data.body))
      })
  }
}

export function selectShow (imdbId) {
  const recieveSelectedSearchResult = selectedSearchResult => {
    return {type: 'RECIEVE_SELECTED_SEARCH_RESULT', selectedSearchResult}
  }

  return dispatch => {
    request
      .get(`api/series/${imdbId}`)
      .end((error, data) => {
        if (error || !data.body) {
          alert(error)
          return
        }

        dispatch(recieveSelectedSearchResult(data.body))
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
