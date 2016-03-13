import React from 'react'
import SearchBar from './searchBar'
import SearchResult from './searchResult'
import {addToWatching} from '../store/actions'

const temporaryStyleForBoxes = {
  float: 'left',
  height: '300px',
  overflow: 'scroll'
}

const Root = ({dispatch, searchResults, series}) => {
  const {foundSeries, selectedSearchResult} = searchResults

  return (
    <div>
      <div className="search-bar">
        <SearchBar dispatch={dispatch} />
      </div>
      <div className="search-results" style={temporaryStyleForBoxes}>
        {foundSeries.map(singleSeries => (
          <SearchResult
            dispatch={dispatch}
            key={singleSeries.imdbID}
            series={singleSeries}
          />
        ))}
      </div>
      <div className="watching-series" style={temporaryStyleForBoxes}>
        <ul>
          {series.map(singleSeries => <li key={singleSeries.imdbID}>{singleSeries.Title}</li>)}
        </ul>
      </div>
      <div className="selected-series" style={{clear: 'both'}}>
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
  searchResults: React.PropTypes.object.isRequired,
  series: React.PropTypes.array.isRequired
}

export default Root
