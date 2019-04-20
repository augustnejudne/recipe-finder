import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../store/actions.js';
import RecipeItem from './RecipeItem.js';

const FavoritesList = props => {
  return props.favorites.map((hit, i) => <RecipeItem hit={hit} key={i} />);
};

const mapStateToProps = ({ favorites }) => {
  return {
    favorites,
  };
};

export default connect(
  mapStateToProps,
  { removeFromFavorites }
)(FavoritesList);

/**
f2f_url: "http://food2fork.com/view/47042"
image_url: "http://static.food2fork.com/5551711173_dc42f7fc4b_zbd8a.jpg"
publisher: "The Pioneer Woman"
publisher_url: "http://thepioneerwoman.com"
recipe_id: "47042"
social_rank: 100
source_url: "http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/"
title: "Spicy Dr. Pepper Shredded Pork"
 */
