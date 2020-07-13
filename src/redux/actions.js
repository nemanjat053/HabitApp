import * as actions from "./actionTypes";

export const habitAdd = (name, description) => ({
  type: actions.ADD_HABIT,
  payload: {
    name,
    description,
  },
});

export const habitDelete = (id) => ({
  type: actions.DELETE_HABIT,
  payload: {
    id,
  },
});
