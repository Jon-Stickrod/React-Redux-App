const initialState = {
    characters: [],
    isFetching: false,
    errors: "",
  };
  
  export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
      case "FETCH_CHARACTER_START":
        return { ...state, isFetching: true, characters: [], errors: "" };
      case "FETCH_CHARACTER_SUCCESS":
        return {
          ...state,
          isFetching: false,
          characters: action.payload,
          errors: "",
        };
      case "FETCH_CHARACTER_FALURE":
        return {
          ...state,
          isFetching: false,
          characters: [],
          errors: action.payload,
        };
    }
  };