// Code MovieReviews Here
import React from "react";

const MovieReviews = ({reviews}) => {
    return (
<<<<<<< HEAD
      <div className="review-list">
      {reviews.map(review=>(
      <div key={review.headline}  className="review">
      <a href={review.link.url}>{review.headline}</a>
      <h1>{review.display_title}</h1>
      <h3>{review.byline}</h3>
      <p>summary: {review.summary_short}</p>
      <p>publication date:{review.publication_date}</p>
      <p>opening date:{review.opening_date}</p>
=======
      <div>
      {reviews.map(review=>(
      <div>
      <h1>{review.display_title}</h1>
      <h3>{review.byline}</h3>
      <a href="result.link.url">{review.headline}</a>
>>>>>>> da20bf9b4a16d26775eac0cd4df51fc8e9acbcf0
      </div>
      
      ))}
      </div>
      
      );
}

export default MovieReviews;