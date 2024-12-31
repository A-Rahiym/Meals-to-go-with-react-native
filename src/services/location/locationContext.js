import { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext({
  isLoading: false,
  error: null,
  location: null,
  search: () => null,
  keyword: "",
});

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("toronto");

  const onSearch = (keyword = "") => {
    setIsLoading(true);
    if (!keyword.length) {
      return;
    }
    setKeyword(keyword);
  };
  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  const value = {
    isLoading,
    error,
    location,
    search: onSearch,
    keyword,
    setKeyword,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
