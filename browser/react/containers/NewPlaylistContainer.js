import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios'




class NewPlaylistContainer extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			inputValue: '',
			tooLongDisable: false,
			emptyInput : false
		}
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
		this.props.addPlaylist(this.state.inputValue);
		this.setState({
			inputValue: ''
		})

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