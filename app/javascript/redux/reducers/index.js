import { combineReducers } from "redux";

import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES
} from '../actions'

function recipes(state = [], action) {
  switch(action.type) {
    case REQUEST_RECIPES:
      return state;
    case RECEIVE_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}

export default combineReducers({ recipes });
