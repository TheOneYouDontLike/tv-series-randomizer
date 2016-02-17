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

        dispatch(recieveSelectedSeries(data.body))
      })
    }
}

function recieveSelectedSeries (series) {
  return {type: 'RECIEVE_SELECTED_SERIES', series}
}

export function addSeries (series) {
  return {type: 'ADD', series}
}
