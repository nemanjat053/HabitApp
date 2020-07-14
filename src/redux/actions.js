import * as actions from "./actionTypes";

export const habitAdd = (id, name, description) => ({
  type: actions.ADD_HABIT,
  payload: {
    id,
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