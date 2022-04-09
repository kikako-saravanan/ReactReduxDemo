import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import juiceReducer from "./juice/juiceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
  juice: juiceReducer,
  user: userReducer,
});

export default rootReducer;
