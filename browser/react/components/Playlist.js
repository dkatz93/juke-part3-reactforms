import React from 'react';
import { Link } from 'react-router';
import Songs from './Songs'

class Playlist extends React.Component {
	constructor(props){
		super(props)
	}

	componentWillReceiveProps (nextProps) {
	    const nextPlaylistId = nextProps.routeParams.playlistId;
	    const currentPlaylistId = this.props.routeParams.playlistId;
	    const selectPlaylist = this.props.selectPlaylist;
	    if (nextPlaylistId !== currentPlaylistId)
	      selectPlaylist(nextPlaylistId);
	}
	componentDidMount () {
	  const playlistId = this.props.routeParams.playlistId;
	  const selectPlaylist = this.props.selectPlaylist;
	  selectPlaylist(playlistId);
	 }

	render() {
		const playlist = this.props.selectedPlaylist;

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