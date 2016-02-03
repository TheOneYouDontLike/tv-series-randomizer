import request from 'superagent'

export function search (name) {
  return dispatch => {
    request
      .get(`api/search/${name}`)
      .end((error, data) => {
        if (error) {
          alert(error)
          dispatch(recieveSearchResults([]))
        }

        dispatch(recieveSearchResults(data.body))
      })
  }
}

function recieveSearchResults (searchResults) {
  return {type: 'RECIEVE_SEARCH_RESULTS', searchResults}
}

export function addSeries (series) {
  return {type: 'ADD', series}
}
