import React from "react";

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
      {reviews.map(review=>(
      <div key={review.headline}  className="review">
      <a href={review.link.url}>{review.headline}</a>
      <h1>{review.display_title}</h1>
      <h3>{review.byline}</h3>
      <p>summary: {review.summary_short}</p>
      <p>publication date:{review.publication_date}</p>
      <p>opening date:{review.opening_date}</p>
      </div>
      
      ))}
      </div>
      
      );
}

export default MovieReviews;