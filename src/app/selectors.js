import * as ProductList from "../common/models";

export const getProductList = (state) => state?.cart;

export const getTotalOrder = (state) =>
  getProductList(state)
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2);

export const isVoucherAvailable = (state) =>
  getProductList(state).find((product) => product.title === "Super Crémeux");

export const getOwner = (state) => {
  return state?.owner;
};

export const getQuantityProductPerName = (name) => (state) =>
  getProductList(state).filter((product) => product.title === name).length;

export const getListWithQuantityProductPerName = (state) => {
  return Object.values(ProductList).map((product) => ({
    ...product,
    quantity: getQuantityProductPerName(product.title)(state),
    price:
      getProductList(state).find((element) => element.title === product.title)
        ?.price || product.price,
  }));
};
