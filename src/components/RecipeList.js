import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { appendToRecipes } from '../store/actions.js';
import RecipeItem from './RecipeItem.js';

const RecipeList = props => {
  const { currentDish, list, start, end, isLoading, error } = props.recipes;
  return (
    <Fragment>
      <div className="row">
        {list.map((hit, i) => (
          <RecipeItem key={i} hit={hit} />
        ))}
      </div>
      {isLoading ? (
        <div className="row py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
      {list.length > 0 && !isLoading ? (
        <div className="row py-5">
          <button
            className="btn btn-link"
            onClick={() => props.appendToRecipes(currentDish, start, end)}
          >
            load more
          </button>
        </div>
      ) : null}
      {error ? <h4 className="display-4">{error}</h4> : null}
    </Fragment>
  );
};

const mapStateToProps = ({ recipes }) => {
  return {
    recipes,
  };
};

export default connect(
  mapStateToProps,
  { appendToRecipes }
)(RecipeList);
