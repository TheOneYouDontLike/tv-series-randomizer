import React from 'react'
import {selectShow} from '../store/actions'

const SearchResult = ({dispatch, show}) => {
  return (
    <li className="collection-item avatar">
      <span className="title">{show.Title} ({show.Year})</span>
      <img alt={show.Title} className="circle" src={show.Poster} />
      <a
        className="secondary-content"
        href="#!"
        onClick={() => dispatch(selectShow(show.imdbID))}
      >
        <i className="material-icons">add</i>
      </a>
    </li>
  )
}

SearchResult.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  show: React.PropTypes.object.isRequired
}

export default SearchResult
