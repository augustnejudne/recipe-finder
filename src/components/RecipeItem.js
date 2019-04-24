import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions.js';
import { Fade } from 'react-reveal';

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
    const inFavorites = favorites.find(e => e.recipe.url === hit.recipe.url);
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
    <Fade>
      <div className="col-sm-6 col-lg-4">
        <div className="card my-2 mx-1" style={{background: 'rgb(255, 253, 247)'}}>
          <a href={hit.recipe.url} target="_blank" rel="noopener noreferrer">
            <img
              src={hit.recipe.image}
              alt={hit.recipe.label}
              className="card-img-top"
              style={{ objectFit: 'cover', width: '100%', height: '200px' }}
            />
          </a>
          <div
            className="card-body"
            style={{
              height: expand ? 'auto' : '400px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <h5 className="card-title">
              <a
                href={hit.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hit.recipe.label}
              </a>
            </h5>
            {hit.recipe.healthLabels.map((healthLabel, i) => (
              <span
                key={i}
                className="badge badge-pill badge-success mx-1 fontweight-light"
              >
                <a href={`https://www.google.com/search?q=${healthLabel}`}>
                  {healthLabel}
                </a>
              </span>
            ))}
            {hit.recipe.cautions.map((caution, i) => (
              <span
                key={i}
                className="badge badge-pill badge-danger mx-1 fontweight-light"
              >
                <a href={`https://www.google.com/search?q=${caution}`}>
                  {caution}
                </a>
              </span>
            ))}
            <p className="text-left text-success mt-3">
              Calories: {hit.recipe.calories.toFixed(2)}
            </p>
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
              <button
                className="btn btn-link"
                onClick={() => setExpand(!expand)}
              >
                {expand ? 'less' : 'more'}
              </button>
            </div>
          </div>
          <div className="card-footer">
            <span
              onClick={favorite}
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            >
              {!starred ? (
                <i className="far fa-heart text-dark" />
              ) : (
                <i className="fas fa-heart text-danger" />
              )}
            </span>
          </div>
        </div>
      </div>
    </Fade>
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
