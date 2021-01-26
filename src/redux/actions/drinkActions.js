export const addCocktail = (cocktails) => ({ type: 'ADD_COCKTAIL', cocktails });

export const requestingData = () => ({ type: 'REQUEST_COCKTAIL' });

export function fetchCocktailById(id) {
  return async (dispatch) => {
    dispatch(requestingData());
    const resolve = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const json = await resolve.json();
    return dispatch(addCocktail(json));
  };
}

export function fetchCocktailByIngredient(ingredient) {
  return async (dispatch) => {
    dispatch(requestingData());
    const resolve = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const json = await resolve.json();
    return dispatch(addCocktail(json));
  };
}

export function fetchCocktailByName(name) {
  return async (dispatch) => {
    dispatch(requestingData());
    const resolve = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    );
    const json = await resolve.json();
    return dispatch(addCocktail(json));
  };
}