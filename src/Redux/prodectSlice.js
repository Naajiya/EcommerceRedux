import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// asynchrounous action
 export const fetchProducts=createAsyncThunk('products/fetchProducts', async()=>{
    const result= await axios.get('https://dummyjson.com/products')
    return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        // pending:false,
        // error:'',
    },
    reducers:{
// only synchronous fuction accepts
    },extraReducers:
        (builder)=>{

            // how to update cases pending error
            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.allProducts=action.payload
                // pending=false,
                // error=""
            })

            builder.addCase(fetchProducts.pending,(state,action)=>{
                state.allProducts=''
                // pending=true,
                // error=""
            })

            builder.addCase(fetchProducts.rejected,(state,action)=>{
                state.allProducts=''
                // pending=false,
                // error="api call failed ....please try after sometime"
            })

        }

    }

)
export default productSlice.reducer
