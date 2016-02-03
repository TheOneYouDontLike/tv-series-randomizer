import React from 'react'
import {search} from '../store/actions'

const SearchBar = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  render () {
    return (
      <div>
        <input placeholder="Name..." ref="search" type="text" />
        <button onClick={() => this.props.dispatch(search(this.refs.search.value))}>Search</button>
      </div>
    )
  }
})

const SearchResult = ({series}) => {
  return (
    <div>
      <div><strong>{series.Title} ({series.Year})</strong></div>
      <img
        alt={series.Title}
        src={series.Poster}
        style={{height: '150px'}}
      />

    </div>
  )
}

const Root = ({store}) => {
  return (
    <div>
      <div className="search-bar">
        <SearchBar dispatch={store.dispatch} />
      </div>
      {store.getState().searchResults.map(series => <SearchResult key={series.imdbID} series={series} />)}
    </div>
  )
}

Root.PropTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root
