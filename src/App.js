// Import Dependencies
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Import components
import apiKey from './config'
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';



// Creates and exports App componenet
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      birds: [],
      cats: [],
      dogs: [],
      query: '',
      history:'',
      searchText: ' '

    }
  }


 
  componentDidMount() {
    this.performSearch();
    this.birdsSearch();
    this.catsSearch();
    this.dogsSearch();
  }

 
// Search function and event listener displays animal pictures as a default and sets title of search


  // Event Listener for search and buttons
  handleClick = e => {
    const query = e.target.id;
    this.performSearch(query);
    this.setState({
      query : query
    })
}


performSearch = (query = 'animals') => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      gifs: response.data.photos.photo,
      query:  query,
   //   history:`/search/${query}`  
      
    });
  }) 
  .catch(error => {
    console.log('Error Fetching and Parsing', error);
  });
}


  // Search Birds Function
  birdsSearch = (query = 'birds') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        birds: response.data.photos.photo
      });
    }) 
    .catch(error => {
      console.log('Error Fetching and Parsing', error);
    });
  }


  // Search Cats Function
  catsSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats: response.data.photos.photo
      });
    }) 
    .catch(error => {
      console.log('Error Fetching and Parsing', error);
    });
  }
  
// Search Dogs Function
  dogsSearch = (query = 'dogs') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        dogs: response.data.photos.photo
      });
    }) 
    .catch(error => {
      console.log('Error Fetching and Parsing', error);
    });
  }

  
// Displays the search form, the navigation, the photocontainer, and sets route paths for links
  render(){
    return (
      <BrowserRouter>
      <div>
        <SearchForm performSearch={this.performSearch}  />
        <Nav  navSelection={this.handleClick}/>


      <Switch>
          <Route exact path='/' render={ () => <PhotoContainer data={this.state.gifs} title={this.state.query} query={this.state.query} />} />
          <Route path='/search/:search' render={() => <PhotoContainer data={this.state.gifs} query={this.state.query} />} />
          <Route exact path="/birds" render={() => <PhotoContainer data={this.state.birds}/>}/>
          <Route exact path="/cats" render={() => <PhotoContainer data={this.state.cats}/>}/>
          <Route exact path="/dogs" render={() => <PhotoContainer data={this.state.dogs}/>}/>
          <Route render={() =><NotFound />}/>
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}


