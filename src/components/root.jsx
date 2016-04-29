import React from 'react'
import SearchBar from './searchBar'
import SearchResult from './searchResult'
import SelectedShow from './selectedShow'
import Spinner from './spinner'
import Show from './show.jsx'

const Root = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    searchResults: React.PropTypes.object.isRequired,
    series: React.PropTypes.array.isRequired
  },

  render () {
    const {dispatch, searchResults, series} = this.props
    const {foundSeries, selectedSearchResult, isSearching} = searchResults

    return (
      <div className="Root container">
        {!selectedSearchResult ?
          <SearchBar dispatch={dispatch} /> : null
        }

        {selectedSearchResult ?
          <SelectedShow
            dispatch={dispatch}
            selectedShow={selectedSearchResult}
          /> : null
        }

        {
          !selectedSearchResult && foundSeries.length && !isSearching ?
            <ul className="collection">
              {foundSeries.map(singleSeries => (
                <SearchResult
                  dispatch={dispatch}
                  key={singleSeries.imdbID}
                  show={singleSeries}
                />
              ))}
            </ul> : null
        }

        {
          !selectedSearchResult && !foundSeries.length && !isSearching ?
            <div>
              <h4>Currently watching</h4>
              <ul className="collection">
                {series.map(show => (
                  <Show key={show.imdbID} show={show} />
                ))}
              </ul>
            </div> : null
        }

        {isSearching ? <Spinner /> : null}
      </div>
    )
  }
})

export default Root
