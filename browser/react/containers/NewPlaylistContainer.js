import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios'
import { browserHistory } from 'react-router'




class NewPlaylistContainer extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			inputValue: '',
			tooLongDisable: false,
			emptyInput : false
		}
	}

	componentWillReceiveProps (nextProps) { 
		const nextPlaylistId = nextProps.routeParams.playlistId;
	    const currentPlaylistId = this.props.routeParams.playlistId;
	    const selectPlaylist = this.props.selectPlaylist;
	    if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
  	}

	handleChange (evt) {
	  const value = evt.target.value;
	  if(value.length > 16){
	  	this.setState({
	  		tooLongDisable : true
	  	})
	  }else {
	  	this.setState({
	  		tooLongDisable : false
	  	})
	  }
	  if(!value.length){
	  	this.setState({
	  		emptyInput : true
	  	})
	  	console.log("empty value", value, this.state.emptyInput)
	  		
	  }else{
	  	this.setState({
	  		emptyInput : false
	  	})
	  }
	  this.setState({
	    inputValue: value
	  });
	}

	handleSubmit (evt){
		//evt.preventDefault();
		this.props.addPlaylist(this.state.inputValue);

		this.setState({
			inputValue: ''
		})
		// let playlist = this.props.selectedPlaylist
		// const path = `/api/playlists/${playlist.id}`;

		//browserHistory.push("/albums")
	}

	render(){
	  const inputValue = this.state.inputValue;
	  const handleChange = this.handleChange.bind(this);
	  const handleSubmit = this.handleSubmit.bind(this);
	  const tooLongDisable = this.state.tooLongDisable;
	  const emptyInput = this.state.emptyInput;

	  return (
	    <div>
	      <NewPlaylist 
	      onChange ={handleChange}
	      onSubmit={handleSubmit}
	      inputValue={inputValue}
	      tooLongDisable={tooLongDisable}
	      emptyInput={emptyInput}/>
	    </div>
	  );
	}
}


export default NewPlaylistContainer;