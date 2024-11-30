import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./prodectSlice"


const ffStore = configureStore({
    reducer:{

        productReducer : productSlice

    }
})
export default ffStore