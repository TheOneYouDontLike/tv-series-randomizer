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
          alert(error)
          dispatch(recieveSearchResults([]))
          return
        }
        dispatch(recieveSearchResults(data.body))
      })
  }
}

export function selectMovie (imdbId) {
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

export function addToWatching (series) {
  userPersistence.add(series)

  return {type: 'ADD_TO_WATCHING', series}
}

export function populateStore () {
  const allSeries = userPersistence.getAll()

  return {type: 'POPULATE_STORE', allSeries}
}
