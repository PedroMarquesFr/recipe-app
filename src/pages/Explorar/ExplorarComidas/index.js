import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ExplorarComidas() {
  const [id, setId] = useState();

  async function fetchRandom() {
    const result = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    ).then((response) => response.json());

    setId(result.meals[0].idMeal);
  }

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div>
      <Link
        to="/explorar/comidas/ingredientes"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </Link>
      <br />
      <Link to="/explorar/comidas/area" data-testid="explore-by-area">
        Por Local de Origem
      </Link>
      <br />
      <Link
        to={ `/comidas/${id}` }
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </Link>
    </div>
  );
}

export default ExplorarComidas;
