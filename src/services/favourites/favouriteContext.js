import { useContext, createContext, useState } from "react";

export const FavouriteContext = createContext({
  favourites: [],
  addFavourite: () => null,
  removeFavourite: () => null,
});

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (newfavourite) => {
    setFavourites([...favourites, newfavourite]);
  };
  const remove = (removed) => {
    const newfavourites = favourites.filter((x) => x.id !== removed.id);
    setFavourites(newfavourites);
  };

  const value = {
    favourites,
    addFavourite: add,
    removeFavourite: remove,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
