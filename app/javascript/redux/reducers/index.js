import { combineReducers } from "redux";
import { combineReducers } from "redux";

import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES
} from '../actions'

function recipes(state = [], action) {
  switch(action.type) {
    case REQUEST_RECIPES:

    case RECEIVE_RECIPES:
      return action.recipes;
  }
}

export default combineReducers({ recipes });
