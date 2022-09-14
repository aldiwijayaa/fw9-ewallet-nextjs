const initialState = {
  data: [],
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BALANCE":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default balance;
