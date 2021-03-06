import * as actions from "./actionTypes";
import axios from "axios";

export const habitAdd = (id, name, description) => {
  return (dispatch) =>
    axios
      .post("http://localhost:3004/habits", { id, name, description })
      .then((response) => {
        dispatch({ type: actions.ADD_HABIT, data: response.data });
      });
};

export const habitDelete = (id) => {
  return (dispatch) =>
    axios.delete("http://localhost:3004/habits" + `/${id}`).then((response) => {
      dispatch({ type: actions.DELETE_HABIT, data: response.data });
    });
};

export const habitGet = () => {
  return (dispatch) =>
    axios.get("http://localhost:3004/habits").then((response) => {
      dispatch({ type: actions.GET_HABIT, data: response.data });
    });
};
