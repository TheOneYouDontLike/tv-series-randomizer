import React from 'react'
import {randomizeEpisode} from '../store/actions'

const Show = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    show: React.PropTypes.object.isRequired,
  },

  componentDidMount () {
    $('select').material_select()
  },

  render () {
    const {dispatch, show} = this.props
    const {randomEpisode} = show

    return (
      <li className="collection-item clearfix">
        <div
          style={{
            float: 'left',
            height: '150px',
            overflow: 'hidden',
            width: '100px',
          }}
        >
          <img src={show.Poster} style={{width: '100%'}} />
        </div>

        {
          randomEpisode ? (
            <div
              style={{
                float: 'left',
                marginLeft: '1em',
              }}
            >
              <div><h5>{show.Title}</h5></div>
              <div>
                Next to watch: <br />
                <strong>
                  Episode {randomEpisode.Episode} - {randomEpisode.Title} <br />
                  Season: {randomEpisode.season} <br />
                  IMDB Rating: {randomEpisode.imdbRating}
                </strong>
              </div>
            </div>
          ) : null
        }

        <div
          style={{float: 'right'}}
        >
          <div className="input-field">
            <select ref={(selectField) => {this.selectField = selectField}}>
              <option disabled value="">Choose your option</option>
              {Array(Number(show.totalSeasons)).fill().map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
            </select>
            <label>Season</label>
          </div>

          <button
            className="btn waves-effect waves-light"
            onClick={() => dispatch(randomizeEpisode(show.imdbID, this.selectField.value))}
            style={{
              margin: '1em 0',
            }}
            type="button"
          >
            <i className="material-icons left">shuffle</i>
            Randomize next
          </button>
        </div>
      </li>
    )
  },
})

export default Show
