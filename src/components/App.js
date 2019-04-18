import React, { Fragment, useState } from 'react';
import SearchRecipes from './SearchRecipes.js';
import RecipeList from './RecipeList.js';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const renderSpinner = () => (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  return (
    <Fragment>
      <Link to="/favorites">favorites</Link>
      <h2>Recipe Finder</h2>
      <div className="container">
        <div className="row justify-content-center">
          <SearchRecipes setIsLoading={setIsLoading} />
        </div>
        <div className="row justify-content-center">
          {isLoading ? renderSpinner() : <RecipeList />}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
