import React from 'react'

const Show = React.createClass({
  propTypes: {
    show: React.PropTypes.object.isRequired
  },

  componentDidMount () {
    $('select').material_select()
  },

  render () {
    const {show} = this.props

    return (
      <li className="collection-item clearfix">
        <div
          style={{
            float: 'left',
            height: '150px',
            overflow: 'hidden',
            width: '100px'
          }}
        >
          <img src={show.Poster} style={{width: '100%'}} />
        </div>

        <div
          style={{
            float: 'left',
            marginLeft: '1em'
          }}
        >
          <div><h5>{show.Title}</h5></div>
          <div>
            Next to watch: <br />
            <strong>The One With Two Parts I</strong>
          </div>
        </div>

        <div
          style={{float: 'right'}}
        >
          <div className="input-field">
            <select>
              <option disabled value="">Choose your option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label>Season</label>
          </div>

          <button
            className="btn waves-effect waves-light"
            style={{
              margin: '1em 0'
            }}
            type="button"
          >
            <i className="material-icons left">shuffle</i>
            Randomize next
          </button>
        </div>
      </li>
    )
  }
})

export default Show
