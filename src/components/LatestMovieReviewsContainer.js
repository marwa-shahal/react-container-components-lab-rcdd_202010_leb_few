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
<<<<<<< HEAD
      <div className="latest-movie-reviews">
=======
       <div className="latest-movie-reviews">
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
       <h1>Latest Movies Reviews</h1>
       <MovieReviews reviews={this.state.reviews} />
      </div>
      )
  }
  
}


export default LatestMovieReviewsContainer;