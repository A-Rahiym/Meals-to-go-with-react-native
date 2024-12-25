import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const resturantRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransfrom = ({ results = [] }) => {
  const mappedResult = results.map((resturant) => {
    resturant.photos = resturant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    console.log(resturant.photos);
    return {
      ...resturant,
      isOPenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};

// resturantRequest()
//   .then(restaurantsTransfrom)
//   .then((a) => console.log(a[3].userRatingsTotal));
