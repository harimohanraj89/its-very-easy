import { createStore } from "redux";
import rootReducer from "./reducers";

// {
//   recipes: [
//     {},
//     {},
//     {}
//   ]
// }

export default createStore(rootReducer);
