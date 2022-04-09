import { BUY_JUICE } from "./juiceType";

const initialState = {
  numOfJuices: 50,
};

const juiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE:
      return {
        ...state,
        numOfJuices: state.numOfJuices - 1,
      };

    default:
      return state;
  }
};

export default juiceReducer;
