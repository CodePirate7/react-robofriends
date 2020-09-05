import { Action } from "./actions";
import { Robot } from "./interfaces/robot";

export interface RobotsState {
  search: string;
  robots: Robot[];
  pending: boolean;
  error: string;
}

export enum ActionType {
  CHANGE_SEARCH = "CHANGE_SEARCH",
  FETCH_ROBOTS = "FETCH_ROBOTS",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FIELD = "FIELD",
}

const initialState = {
  search: "",
  robots: [],
  pending: false,
  error: "",
};

export const robotsReducer = (
  state: RobotsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CHANGE_SEARCH: {
      return { ...state, search: action.payload };
    }
    case ActionType.PENDING: {
      return { ...state, pending: true };
    }
    case ActionType.SUCCESS: {
      return { ...state, pending: false, robots: action.payload };
    }
    case ActionType.FIELD: {
      return { ...state, pending: false, error: action.payload };
    }
    default:
      return state;
  }
};
