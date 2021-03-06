import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

const App = props => {
  return (
    <Fragment>
      <Link to="/favorites">favorites</Link>
      <h1 style={{color: '#3d5e67'}}>Recipe Finder</h1>
      <div className="container">
        <div className="row justify-content-center">
          <SearchRecipes />
        </div>
        <div className="row justify-content-center">
          <RecipeList />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
