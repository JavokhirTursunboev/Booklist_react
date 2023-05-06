import { faker } from "@faker-js/faker";
export const Data = [
  {
    author: faker.name.fullName(),
    title: "Minds Inside",
    img: "https://images-na.ssl-images-amazon.com/images/I/81XR4CRJd-L._AC_UL210_SR195,210_.jpg",
  },
  {
    author: faker.name.fullName(),
    title: faker.lorem.words(),
    img: "https://images-na.ssl-images-amazon.com/images/I/81X1plzH9DL._AC_UL210_SR195,210_.jpg",
  },
];
