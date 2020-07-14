import * as actions from "./actionTypes";

const initialState = {
  habits: [
    {
      id: 1,
      name: "Habit one",
      description: "Description habit one",
    },
    {
      id: 2,
      name: "Habit two",
      description: "Description habit two",
    },
    {
      id: 3,
      name: "Habit three",
      description: "Description habit three",
    },
  ],
};

console.log(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_HABIT:
      return Object.assign({}, state, {
        habits: [
          ...state.habits,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
          },
        ],
      });

    case actions.DELETE_HABIT:
      return state.filter((habit) => habit.id !== action.payload.id);

    default:
      return state;
  }
}
