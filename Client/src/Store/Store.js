import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice";
import DishesSlice from "../Features/DishesSlice";
import AuthSlice from "../Features/AuthSlice";
import WishListSlice from "../Features/WishListSlice";
const Store = configureStore({
    reducer: {
        cart: CartSlice,
        Dish: DishesSlice,
        authentication: AuthSlice,
        wishList: WishListSlice
    }
});

export default Store;