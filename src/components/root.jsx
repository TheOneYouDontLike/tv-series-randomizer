import React from 'react'
import SearchBar from './searchBar'
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

const Root = ({dispatch, searchResults}) => {
  console.log('rendering root', searchResults)
  return (
    <div>
      <div className="search-bar">
        <SearchBar dispatch={dispatch} />
      </div>
      {searchResults.foundSeries.map(series => (
        <SearchResult
          dispatch={dispatch}
          key={series.imdbID}
          series={series}
        />
      ))}
    </div>
  )
}

Root.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  searchResults: React.PropTypes.object.isRequired
}

export default Root
