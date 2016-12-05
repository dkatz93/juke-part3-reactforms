import React from 'react';
import { Link } from 'react-router';

class Playlist extends React.Component {

	componentDidMount () {
	  const playlistId = this.props.routeParams.playlistId;
	  const selectPlaylist = this.props.selectPlaylist;
	  selectPlaylist(playlistId);
	 }

	render() {
		const playlist = props.playlist;

		return (
			<div>
			  <h3>{ playlist.name }</h3>
			  <Songs songs={playlist.songs} /> {}
			  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
			  <hr />
			</div>
		)
	}

}

export default Playlist;