export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/catsLoading" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((r) => r.json())
      .then((cats) => {
        dispatch({
          type: "cats/catsLoaded",
          payload: cats.images,
        });
      });
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };

    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };

    default:
      return state;
  }
}
