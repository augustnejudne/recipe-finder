import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions.js';

const RecipeItem = ({
  hit,
  addToFavorites,
  removeFromFavorites,
  recipes,
  favorites,
}) => {
  const [starred, setStarred] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    // if (favorites.includes(hit)) {
    //   setStarred(true);
    // }
    const inFavorites = favorites.find(e => e.recipe.label === hit.recipe.label);
    if (inFavorites) {
      setStarred(true);
    }
  }, [favorites, recipes]);

  const favorite = () => {
    setStarred(!starred);
    if (!starred) {
      addToFavorites(hit);
    } else {
      removeFromFavorites(hit);
    }
  };

  return (
    <div className="card my-2 mx-1" style={{ width: '18rem' }}>
      <img
        src={hit.recipe.image}
        alt={hit.recipe.label}
        className="card-img-top"
        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
      />
      <div
        className="card-body"
        style={{
          height: expand ? 'auto' : '200px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <h5 className="card-title">
          <a href={hit.recipe.url} target="_blank" rel="noopener noreferrer">
            {hit.recipe.label}
          </a>
        </h5>
        <ul className="text-left">
          {hit.recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ul>
        <div
          style={{
            background: 'linear-gradient(transparent, white 50%)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'right',
            paddingRight: '10%',
          }}
        >
          <button className="btn btn-link" onClick={() => setExpand(!expand)}>
            {expand ? 'less' : 'more'}
          </button>
        </div>
      </div>
      <div className="card-footer">
        <button
          className={`btn btn-sm btn-${starred ? 'danger' : 'success'}`}
          onClick={() => favorite()}
        >
          {!starred ? 'Add to favorite' : 'Remove from favorite'}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ favorites, recipes }) => {
  return {
    recipes,
    favorites,
  };
};

export default connect(
  mapStateToProps,
  { addToFavorites, removeFromFavorites }
)(RecipeItem);
