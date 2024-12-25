import { useState, createContext, useEffect, useMemo } from "react";
import { resturantRequest, restaurantsTransfrom } from "./resturantsServices";

export const ResturantsContext = createContext({
  resturants: [],
  isLoading: false,
  error: null
});

export const ResturantsContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isloading, setIsLoading] = useState(Boolean);
  const [error, setError] = useState(null);

  const resolveResturants = () => {
    setTimeout(() => {
      resturantRequest()
        .then(restaurantsTransfrom)
        .then((x) => {
          setIsLoading(false);
          setResturants(x);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 5000);
  };

  useEffect(() => {
    resolveResturants();
  }, []);

  console.log(resturants);

  const value = { resturants, isloading, error };
  return (
    <ResturantsContext.Provider value={value}>
      {children}
    </ResturantsContext.Provider>
  );
};
