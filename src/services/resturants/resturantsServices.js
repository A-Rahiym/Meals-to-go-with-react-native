import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const resturantRequest = (location) => {
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
    resturant.photos = resturant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...resturant,
      isOPenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
