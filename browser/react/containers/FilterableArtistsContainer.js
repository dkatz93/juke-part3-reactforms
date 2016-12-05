import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';
import NewPlaylist from '../components/NewPlaylist'




class FilterableArtistsContainer extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			inputValue: ''
		}
	}

	handleChange (evt) {
	  const value = evt.target.value;
	  this.setState({
	    inputValue: value
	  });
	}


	render(){
	  const inputValue = this.state.inputValue;
	  const filteredArtists = this.props.artists.filter(artist => 
	  	artist.name.match(inputValue));

	  return (
	    <div>
	      <FilterInput handleChange={this.handleChange.bind(this)}/>
	      <Artists artists={filteredArtists} />
	    </div>
	  );
	}
}


export default FilterableArtistsContainer;
