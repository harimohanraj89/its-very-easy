export const REQUEST_RECIPES='REQUEST_RECIPES'
export const RECEIVE_RECIPES='RECEIVE_RECIPES'

export function requestRecipes() {
  return {
    type: REQUEST_RECIPES
  }
}

export function receiveRecipes(response) {
  return {
    type: RECEIVE_RECIPES,
    recipes: response.data
  }
}
