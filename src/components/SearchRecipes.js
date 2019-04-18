import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { setRecipes } from '../store/actions.js';

const SearchRecipes = props => {
  const [dish, setDish] = useState('');

  const search = (e) => {
    e.preventDefault();
    props.setIsLoading(true)
    const appId = 'ce7efbb9';
    const appKey = 'caf7060e4870099c0383dadb0cd72895';
    const url = `https://api.edamam.com/search?q=${dish}&app_id=${appId}&app_key=${appKey}&to=30`
    console.log(url);
    axios.get(url).then(response => {
      props.setRecipes(response.data.hits);
      props.setIsLoading(false)
    });
  };



  return (
    <Form inline onSubmit={(e) => search(e)}>
      <FormGroup>
        <FormLabel>Dish</FormLabel>&nbsp;
        <FormControl
          autoFocus
          type="text"
          placeholder="adobo"
          onChange={e => setDish(e.target.value)}
        />
      </FormGroup>
      &nbsp;
      <Button type="submit" disabled={dish === ''}>
        Submit
      </Button>
    </Form>
  );
};

export default connect(
  null,
  { setRecipes }
)(SearchRecipes);
