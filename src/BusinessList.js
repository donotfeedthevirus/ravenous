import React from 'react';

import Business from './Business';

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

function BusinessList() {
    return (
      <div className="business-list">
        <Business
          imageSrc={businessSample.imageSrc}
          name={businessSample.name}
          address={businessSample.address}
          city={businessSample.city}
          state={businessSample.state}
          zipCode={businessSample.zipCode}
          category={businessSample.category}
          rating={businessSample.rating}
          reviewCount={businessSample.reviewCount}
        />
        <Business
          imageSrc={businessSample.imageSrc}
          name={businessSample.name}
          address={businessSample.address}
          city={businessSample.city}
          state={businessSample.state}
          zipCode={businessSample.zipCode}
          category={businessSample.category}
          rating={businessSample.rating}
          reviewCount={businessSample.reviewCount}
        />
        <Business
          imageSrc={businessSample.imageSrc}
          name={businessSample.name}
          address={businessSample.address}
          city={businessSample.city}
          state={businessSample.state}
          zipCode={businessSample.zipCode}
          category={businessSample.category}
          rating={businessSample.rating}
          reviewCount={businessSample.reviewCount}
        />
      </div>
    );
  };

  export default BusinessList;