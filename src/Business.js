import React from 'react';

function Business(props) {
    return (
      <div className="business">
        <img src={props.imageSrc} alt={props.name} />
        <h2>{props.name}</h2>
        <div className="business-info">
          <p>{props.address}</p>
          <p>{props.city}, {props.state} {props.zipCode}</p>
          <p>{props.category}</p>
          <p>Rating: {props.rating} stars</p>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    );
};

export default Business;