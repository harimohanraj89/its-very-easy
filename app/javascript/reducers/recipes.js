import * as types from '../types'

function recipes(state = [], action) {
  switch(action.type) {
    case types.REQUEST_RECIPES:
      return state;
    case types.RECEIVE_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}

export default recipes
