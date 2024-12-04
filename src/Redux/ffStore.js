import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./prodectSlice"
import wishSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";


const ffStore = configureStore({
    reducer:{

        productReducer : productSlice,
        whishlistreducer: wishSlice,
        cartSliceReducer:cartSlice,

    }
})
export default ffStore