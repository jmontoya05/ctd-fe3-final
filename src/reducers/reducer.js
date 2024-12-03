
export const initialState = {
    theme: "light",
    data: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
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
      case "ADD_FAVORITE":
        const newFavorites = [...state.favorites, action.payload];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return {
          ...state,
          favorites: newFavorites,
        };
      case "REMOVE_FAVORITE":
        const updatedFavorites = state.favorites.filter(fav => fav.id !== action.payload.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return {
          ...state,
          favorites: updatedFavorites,
        };
      default:
        return state;
    }
  };
  
  
  