import React from 'react'
import {search} from '../store/actions'
import debounce from '../debounce'

const SearchBar = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  componentWillMount () {
    this.debouncedSearch = debounce(value => {
      this.props.dispatch(search(value))
    }, 1500)
  },

  handleSearch (event) {
    const {value} = event.target
    this.debouncedSearch(value)
  },

  render () {
    return (
      <nav className="SearchBar">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                onChange={this.handleSearch}
                required
                type="search"
              />
              <label htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }
})

export default SearchBar
