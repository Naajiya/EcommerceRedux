import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// asynchrounous action
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios.get('https://dummyjson.com/products')
    return result.data.products
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        dummyAllProduct:[],
        loading: false,
        error: '',
    },
    reducers: {

        // search product name
        searchProduct: ((state, action) => {
            state.allProducts = state.dummyAllProduct.filter(pro => pro.title.toLowerCase().includes(action.payload))
        })


        // only synchronous fuction accepts
    }, extraReducers:
        (builder) => {

            // how to update cases pending error
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload,
                state.dummyAllProduct=action.payload,
                state.loading = false,
                    state.error = ""
            })

            builder.addCase(fetchProducts.pending, (state, action) => {
                state.allProducts = []
                state.loading = true,
                    state.error = ""
            })

            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.allProducts = []
                state.pending = false,
                    state.error = "api call failed ....please try after sometime"
            })



        }

}

)
export default productSlice.reducer
export const {searchProduct} =productSlice.actions

