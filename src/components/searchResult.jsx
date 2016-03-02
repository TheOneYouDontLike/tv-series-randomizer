import React from 'react'
import {selectMovie} from '../store/actions'

const SearchResult = ({dispatch, series}) => {
  return (
    <div>
      <div><strong>{series.Title} ({series.Year})</strong></div>
      <img
        alt={series.Title}
        onClick={() => dispatch(selectMovie(series.imdbID))}
        src={series.Poster}
        style={{height: '150px'}}
      />
    </div>
  )
}

export default SearchResult
