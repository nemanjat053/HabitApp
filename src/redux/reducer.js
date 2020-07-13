import * as actions from "./actionTypes";

const initialTodos = {
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

export default function reducer(state = initialTodos, action) {
  switch (action.type) {
    case actions.ADD_HABIT:
      return [
        ...state,
        {
          name: action.payload.name,
          description: action.payload.description,
        },
      ];

    //   Filter habits and return habits which does not equal provided id
    case actions.DELETE_HABIT:
      return state.filter((habit) => habit.id !== action.payload.id);

    default:
      return state;
  }
}
