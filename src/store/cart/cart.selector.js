import { createSelector } from "reselect";

const selectCartReducer = state => state.cartReducer;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    cart => cart.isCartOpen
    )

export const selectCartItems = createSelector(
    [selectCartReducer],
    cart => cart.itemsCart
)

export const selectCartCount = createSelector(
    [selectCartItems], 
    (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    }
)