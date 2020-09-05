import { ActionType } from "./robotsReducer";
import { Dispatch } from "redux";
// import { Robot } from "./interfaces/robot";

export interface Action {
  type: ActionType;
  payload?: any;
}

export const changeSearch = (search: string): Action => ({
  type: ActionType.CHANGE_SEARCH,
  payload: search,
});

export const fetchRobots = () => async (dispatch: Dispatch) => {
  dispatch({ type: ActionType.PENDING });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: ActionType.SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionType.FIELD, payload: error.message });
  }
};
