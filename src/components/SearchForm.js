import React, { Component} from 'react';
import { withRouter } from "react-router-dom";

 class SearchForm extends Component{
    

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value});
    }


// handles search and search history for search queries

handleSearch = e => {
    e.preventDefault();
     let searchPath = `/search/${this.state.searchText}`;
     this.props.performSearch(this.state.searchText)
     this.props.history.push(searchPath);
     e.currentTarget.reset();
    
    
  }

// renders search form 

render() {
    return(
        <form className='search-form'  onSubmit={this.handleSearch} >
     
            <input type="search" onChange={this.onSearchChange} name="searchText" placeholder ="Search..."  ref={ (input) => this.searchText = input } />
            <button type="submit" id="submit">Submit</button>   
        </form> 
     );
    }
}

export default withRouter(SearchForm);