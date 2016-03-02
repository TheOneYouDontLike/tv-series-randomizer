import React from 'react'
import SearchBar from './searchBar'
import SearchResult from './searchResult'
import {addToWatching} from '../store/actions'

const temporaryStyleForSearchResults = {
  maxHeight: '300px',
  overflow: 'scroll'
}

const Root = ({dispatch, searchResults}) => {
  const {foundSeries, selectedSearchResult} = searchResults

  return (
    <div>
      <div className="search-bar">
        <SearchBar dispatch={dispatch} />
      </div>
      <div className="search-results" style={temporaryStyleForSearchResults}>
        {foundSeries.map(series => (
          <SearchResult
            dispatch={dispatch}
            key={series.imdbID}
            series={series}
          />
        ))}
      </div>
      <div className="selected-series">
        <div>{selectedSearchResult.Title}</div>
        <div>{selectedSearchResult.Year}</div>
        <div>{selectedSearchResult.imdbRating}</div>
        <div>{selectedSearchResult.Genre}</div>
        <div>{selectedSearchResult.Actors}</div>
        <div>{selectedSearchResult.Runtime}</div>
        <div>{selectedSearchResult.Plot}</div>
        <div><img src={selectedSearchResult.Poster} /></div>
        <div>
          <button onClick={() => dispatch(addToWatching(selectedSearchResult))}>Add to 'Watching'</button>
        </div>
      </div>
    </div>
  )
}

Root.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  searchResults: React.PropTypes.object.isRequired
}

export default Root
