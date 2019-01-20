import * as types from "../types"

export function requestRecipes() {
  return {
    type: types.REQUEST_RECIPES
  }
}

export function receiveRecipes(response) {
  return {
    type: types.RECEIVE_RECIPES,
    recipes: response.data
  }
}
