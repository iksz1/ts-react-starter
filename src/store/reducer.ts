import { Reducer, Action } from "redux";

export const ADD_NUMBER = "ADD_NUMBER";

export type Result = number;

const reducer: Reducer<Result> = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return (state += action.payload);

    default:
      return state;
  }
};

interface IAddNumberAction extends Action {
  payload: number;
}

export const addNumber = (n: number): IAddNumberAction => ({
  type: ADD_NUMBER,
  payload: n,
});

export default reducer;
