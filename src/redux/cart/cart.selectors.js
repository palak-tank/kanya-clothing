import { createSelectors } from "reselect";

//Input selector, uses state and return slice of it
const selectCart = state => state.cart;

//Memoi selector
export const selectCartItems = createSelectors(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelectors(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
