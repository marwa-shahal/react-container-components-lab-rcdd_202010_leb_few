import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  
  state={
    reviews:[]
  }
  
  fetchReviews=()=>{
    fetch(URL)
    .then(response=>response.json())
    .then(data=>this.setState({reviews:data.results}))
  }
  
  componentDidMount(){
    this.fetchReviews()
  }
  
  render(){
    return (
      <div className="latest-movie-reviews">
       <h1>Latest Movies Reviews</h1>
       <MovieReviews reviews={this.state.reviews} />
      </div>
      )
  }
  
}


export default LatestMovieReviewsContainer;