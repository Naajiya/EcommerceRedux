import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addTwoCart:((state,action)=>{
            existingProduct=state.filter(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++;
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        })
    }
})

export default cartSlice.reducer
export const { addTwoCart } = cartSlice.actions