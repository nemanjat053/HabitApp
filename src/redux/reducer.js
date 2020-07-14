import * as actions from "./actionTypes";

const initialState = {
  habits: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case for getting fetched data
    case actions.GET_HABIT:
      return Object.assign({}, state, {
        habits: action.data,
      });

    case actions.ADD_HABIT:
      return [
        ...state.habits,
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
        },
      ];

    case actions.DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload.id),
      };

    default:
      return state;
  }
}
