import React, { Fragment } from 'react';
import FavoritesList from './FavoritesList.js';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <Fragment>
      <Link to="/">back to recipe finder</Link>
      <h1 style={{ color: '#3d5e67' }}>Favorites</h1>
      <div className="container">
        <div className="row justify-content-center">
          <FavoritesList />
        </div>
      </div>
    </Fragment>
  );
};

export default Favorites;
