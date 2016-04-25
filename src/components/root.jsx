import React from 'react'
import SearchBar from './searchBar'
import SearchResult from './searchResult'
import SelectedShow from './selectedShow'

const Root = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    searchResults: React.PropTypes.object.isRequired,
    series: React.PropTypes.array.isRequired
  },

  render () {
    const {dispatch, searchResults, series} = this.props
    const {foundSeries, selectedSearchResult} = searchResults

    return (
      <div className="Root container">
        <SearchBar dispatch={dispatch} />

        {selectedSearchResult ?
          <SelectedShow
            dispatch={dispatch}
            selectedShow={selectedSearchResult}
          /> :
          <ul className="collection">
            {foundSeries.map(singleSeries => (
              <SearchResult
                dispatch={dispatch}
                key={singleSeries.imdbID}
                show={singleSeries}
              />
            ))}
          </ul>
        }
      </div>
    )
  }
})
/*
      <div className="watching-series" style={temporaryStyleForBoxes}>
        <ul>
          {series.map(singleSeries => <li key={singleSeries.imdbID}>{singleSeries.Title}</li>)}
        </ul>
      </div>*/

export default Root
