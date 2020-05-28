import axios from "axios";

export const getCharacters = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHARACTER_START" });

    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((response) => {
        console.log("DATA RESPONSE: ", response);
        dispatch({ type: "FETCH_CHARACTER_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "FETCH_CHARACTER_FAILURE", payload: error.response });
      });
  };
};