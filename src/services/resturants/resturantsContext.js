import { useState, createContext, useEffect, useMemo, useContext } from "react";
import { resturantRequest, restaurantsTransfrom } from "./resturantsServices";
import { LocationContext } from "../location/locationContext";
export const ResturantsContext = createContext({
  resturants: [],
  isloading: false,
  error: null,
});

export const ResturantsContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isloading, setIsLoading] = useState(Boolean);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveResturants = (location) => {
    setTimeout(() => {
      setIsLoading(true);
      setResturants([]);
      resturantRequest(location)
        .then(restaurantsTransfrom)
        .then((x) => {
          setIsLoading(false);
          setResturants(x);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const transformed_location = `${location.lat},${location.lng}`;
      console.log("resturant location", transformed_location);
      retrieveResturants(transformed_location);
    }
  }, [location]);

  const value = { resturants, isloading, error };
  return (
    <ResturantsContext.Provider value={value}>
      {children}
    </ResturantsContext.Provider>
  );
};
