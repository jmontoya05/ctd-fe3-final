
export const initialState = {
    theme: "light",
    data: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_THEME":
        return {
          ...state,
          theme: action.payload,
        };
      case "SET_DATA":
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  