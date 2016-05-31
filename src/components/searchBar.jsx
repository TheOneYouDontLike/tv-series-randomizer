import React from 'react'
import {search, clearSearchResults, isSearching} from '../store/actions'
import debounce from '../debounce'

const SearchBar = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  componentWillMount () {
    this.debouncedSearch = debounce(value => {
      this.props.dispatch(search(value))
    }, 1000)

    this.debouncedSearchIndicator = debounce(() => {
      this.props.dispatch(isSearching())
    }, 500)
  },

  handleSearch (event) {
    const {value} = event.target
    if (!value) {
      this.props.dispatch(clearSearchResults())
    }
    this.debouncedSearchIndicator()
    this.debouncedSearch(value)
  },

  render () {
    return (
      <nav className="SearchBar">
        <div className="nav-wrapper">
          <div className="input-field">
            <input
              id="search"
              onChange={this.handleSearch}
              required
              style={{height: '4.5rem'}}
              type="search"
            />
            <label htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </div>
      </nav>
    )
  },
})

export default SearchBar
