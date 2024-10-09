import React from 'react';

const businessSample = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
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

function BusinessList() {
  return (
    <div className="business-list">
      <Business
        imageSrc="https://content.codecademy.com/programs/react/ravenous/pizza.jpg"
        name="MarginOtto Pizzeria"
        address="1010 Paddington Way"
        city="Flavortown"
        state="NY"
        zipCode="10101"
        category="Italian"
        rating="4.5"
        reviewCount="90"
      />
      <Business
        imageSrc="https://content.codecademy.com/programs/react/ravenous/pizza.jpg"
        name="MarginOtto Pizzeria"
        address="1010 Paddington Way"
        city="Flavortown"
        state="NY"
        zipCode="10101"
        category="Italian"
        rating="4.5"
        reviewCount="90"
      />
      <Business
        imageSrc="https://content.codecademy.com/programs/react/ravenous/pizza.jpg"
        name="MarginOtto Pizzeria"
        address="1010 Paddington Way"
        city="Flavortown"
        state="NY"
        zipCode="10101"
        category="Italian"
        rating="4.5"
        reviewCount="90"
      />
    </div>
  );
}

export default BusinessList;