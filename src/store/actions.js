import request from 'superagent'

export function search (name) {
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

function recieveSearchResults (searchResults) {
  return {type: 'RECIEVE_SEARCH_RESULTS', searchResults}
}

export function selectMovie (imdbId) {
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

function recieveSelectedSearchResult (selectedSearchResult) {
  return {type: 'RECIEVE_SELECTED_SEARCH_RESULT', selectedSearchResult}
}

export function addToWatching (series) {
  return {type: 'ADD_TO_WATCHING', series}
}

export function addSeries (series) {
  return {type: 'ADD', series}
}
