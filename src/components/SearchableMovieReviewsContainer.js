import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
  state={
    reviews:[],
<<<<<<< HEAD
    searchTerm:''
  }
  
  handleChange=(event)=>{
    this.setState({searchTerm:event.target.value});
=======
    searchInput:''
  }
  
  handleChange=(event)=>{
    this.setState({searchInput:event.target.value});
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
  }
  
  handleSubmit=(e)=>{
    e.preventDefault();
<<<<<<< HEAD
    this.fetchData(this.state.searchTerm)
=======
    this.fetchData(this.state.searchInput)
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
  }
  
  fetchData=(rev)=>{
  fetch(URL.concat(rev))
  .then(response=>response.json())
  .then(data=>this.setState({reviews:data.results}))
  }
  
  render(){
    return(
<<<<<<< HEAD
      <div className="searchable-movie-reviews">
=======
      <div>
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} placeholder="search for na book review" required />
      <button type="submit" > search </button>
      </form>
<<<<<<< HEAD
          
       <MovieReviews reviews={this.state.reviews} />
      </div>
=======
       <MovieReviews reviews={this.state.reviews} />
       </div>
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
      )
  }
  
  
  
}
