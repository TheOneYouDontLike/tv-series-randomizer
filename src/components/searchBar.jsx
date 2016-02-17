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

export default SearchBar
