import React from 'react'

const Root = ({store}) => {
  return (
    <div>
      <div className="search-bar">
        <input placeholder="Search for a series..." type="text" />
        <button onClick={() => store.dispatch({type: 'SEARCH'})}>Search</button>
      </div>
      {store.getState().map(episode => <div>{episode}</div>)}
    </div>
  )
}

Root.PropTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root
