import React from 'react'
import {addToWatching} from '../store/actions'

const SelectedShow = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    selectedShow: React.PropTypes.object.isRequired
  },

  render () {
    const {dispatch, selectedShow} = this.props

    return (
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={selectedShow.Poster} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {selectedShow.Title} {selectedShow.Year}
            <i className="material-icons right">more_vert</i>
          </span>
          <div>
            <div>{selectedShow.Genre} / {selectedShow.Runtime} / Rating: {selectedShow.imdbRating}</div>
            <div>Cast: {selectedShow.Actors}</div>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {selectedShow.Title} {selectedShow.Year}
            <i className="material-icons right">close</i>
          </span>
          <div>{selectedShow.Plot}</div>
        </div>
        <div className="card-action">
          <a href="#" onClick={() => dispatch(addToWatching(selectedShow))}>Watch</a>
          <a href="#">Close</a>
        </div>
      </div>

    )
  }
})

export default SelectedShow
