import React from 'react'


const NewPlaylist = function (props) {
return (
<div className="well">
  <form onSubmit={props.onSubmit} className="form-horizontal">
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input value={props.inputValue} onChange={props.onChange} className="form-control" type="text"/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
        {props.tooLongDisable ? <div className="alert alert-warning">Please create a playlist with fewer than 16 characters!</div> : null}
        {!props.emptyInput ? null : <div className="alert alert-warning">Please enter a name!</div>}
          <button disabled={props.tooLongDisable} type="submit" className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlaylist;