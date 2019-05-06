import React, { useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRecipes } from '../store/actions.js';

const SearchRecipes = props => {
  const [dish, setDish] = useState('');

  return (
    <Form
      inline
      onSubmit={e => {
        e.preventDefault();
        props.fetchRecipes(dish);
      }}
    >
      <FormGroup>
        <FormControl
          className="mb-2"
          autoFocus
          type="text"
          placeholder="Enter ingredients or dish"
          onChange={e => setDish(e.target.value)}
        />
        &nbsp;
        <Button className="mb-2" type="submit" disabled={dish === ''}>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = ({ recipes }) => {
  return {
    recipes,
  };
};

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(SearchRecipes);
