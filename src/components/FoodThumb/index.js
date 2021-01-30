import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import propTypes from 'prop-types';
import {
  toggleFavorite,
  doesFavoriteExists,
} from '../../services/localstorage';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function FoodThumb({ detailed, route, id }) {
  const [copiedAlert, setCopiedAlert] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  let detailedImg;
  let detailedTitle;
  let category;

  if (route === 'comidas') {
    detailedImg = 'strMealThumb';
    detailedTitle = 'strMeal';
    category = 'strCategory';
  } else {
    detailedImg = 'strDrinkThumb';
    detailedTitle = 'strDrink';
    category = 'strAlcoholic';
  }

  const req = {
    id,
    type: route,
    area: route === 'comidas' ? detailed[0].strArea : '',
    category: detailed[0].strCategory,
    alcoholicOrNot: route === 'comidas' ? '' : detailed[0].strAlcoholic,
    name: detailed[0][detailedTitle],
    image: detailed[0][detailedImg],
  };

  useEffect(() => {
    console.log('entrou');
    setIsFavorite(doesFavoriteExists(id));
  }, [id, isFavorite]);

  const mds = 1000;

  const copyTo = () => {
    copy(`http://localhost:3000/${route}/${id}`);
    setCopiedAlert(true);
    setTimeout(() => {
      copy(`http://localhost:3000/${route}/${id}`);
      setCopiedAlert(false);
    }, mds);
  };

  return (
    <div>
      {/* {copy(`http://localhost:3000/${route}/${id}`)} */}
      <img
        className="recipe-thumbnail"
        data-testid="recipe-photo"
        alt=""
        src={ detailed[0][detailedImg] }
      />
      <h2 data-testid="recipe-title">{detailed[0][detailedTitle]}</h2>
      <button type="button" data-testid="share-btn" onClick={ copyTo }>
        <img alt="" src={ shareIcon } />
      </button>
      <input
        type="image"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt=""
        data-testid="favorite-btn"
        onClick={ () => {
          setIsFavorite(!isFavorite);
          toggleFavorite(req);
        } }
      />

      <h4 data-testid="recipe-category">{detailed[0][category]}</h4>
      {copiedAlert && <p>Link copiado!</p>}
    </div>
  );
}

FoodThumb.propTypes = {
  detailed: propTypes.arrayOf(propTypes.object).isRequired,
  route: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
