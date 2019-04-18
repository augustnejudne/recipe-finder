import React, { Fragment } from 'react';
import FavoritesList from './FavoritesList.js';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <Fragment>
      <Link to="/">recipe finder</Link>
      <h2>Favorites</h2>
      <div className="container">
        <div className="row justify-content-center">
          <FavoritesList />
        </div>
      </div>
    </Fragment>
  );
};

export default Favorites;