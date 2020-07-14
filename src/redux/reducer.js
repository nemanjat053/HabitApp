import * as actions from "./actionTypes";

const initialState = {
  habits: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_HABIT:
      // TODO: Delete this after try
      // return Object.assign({}, state, {
      //   habits: state.habits.concat({
      //     id: action.payload.id,
      //     name: action.payload.name,
      //     description: action.payload.description,
      //   }),
      // });

      return [
        ...state.habits,
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
        },
      ];

    // TODO: Delete this after try
    // return Object.assign({}, state, {
    //   habits: [
    //     ...state.habits,
    //     {
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       description: action.payload.description,
    //     },
    //   ],
    // });

    case actions.DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload.id),
      };

    default:
      return state;
  }
}
