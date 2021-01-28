import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/Footer';
import {
  fetchFoodByIngredient,
  requestRequired
} from '../../../../redux/actions/foodActions';
import './styles.css';

function ExplorarComidasIngredientes(props) {
  const [ingredients, setIngredients] = useState([]);

  async function fetchIngredients() {
    const INITIAL_RETURN = 0;
    const MAX_RETURN = 12;
    const results = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    ).then((response) => response.json());
    const result = results.meals.slice(INITIAL_RETURN, MAX_RETURN);
    setIngredients(result);
  }

  function handleIngredient({ target }) {
    const { request, fetchFoodIngredient } = props;
    request();
    fetchFoodIngredient(target.alt);
  }

  function renderMeals() {

    if(!ingredients) return (<div>Loading...</div>)
    return (
      <div className="container-foods">
        { ingredients.map((item, index) => (
          <Link
            key={ index }
            onClick={ handleIngredient }
            to="/comidas"
            className="list-foods"
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}.png` }
              alt={ item.strIngredient }
            />
            <div>{ item.strIngredient }</div>
          </Link>
        ))}
      </div>
    );
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      HEADER
      { renderMeals() }
      <Footer />
    </div>
  );
}

ExplorarComidasIngredientes.propTypes = {
  fetchFoodIngredient: PropTypes.func,
  request: PropTypes.func
}

const mapStateToProps = (state) => ({
  foods: state.foodMeals,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoodIngredient: (food) => dispatch(fetchFoodByIngredient(food)),
  request: (food) => dispatch(requestRequired(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplorarComidasIngredientes);
