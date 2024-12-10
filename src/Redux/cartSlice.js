    import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


    const cartSlice=createSlice({
        name:'cart',
        initialState:[],
        reducers:{
            addTwoCart:((state,action)=>{
                const existingProduct=state.find(item=>item.id==action.payload.id)
                if(existingProduct){
                    const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                    existingProduct.quantity++;
                    existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
                    state=[...remainingProduct,existingProduct]
                }else{
                    state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
                }
            }),
            removeCartItem:((state,action)=>{
                return state.filter(item=>item.id!=action.payload)
            }),
            increamentQuantity:(state,action)=>{
                const existingProduct=state.find(item=>item.id==action.payload)
                existingProduct.quantity++;
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price;
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]
            },
            decrementQuantity:(state,action)=>{
                const existingProduct=state.find(item=>item.id==action.payload)
                existingProduct.quantity--;
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price;
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]
            },
            emptyCart:(state)=>{
                return state=[]
            },
            // totalSum:(state)=>{
            //     const productPrices=state.map(f=>f.price);
            //     productPrices.reduce((num1,num2)=>num1+num2)
            // }

        }
    })

    export default cartSlice.reducer
    export const { addTwoCart ,removeCartItem,increamentQuantity,decrementQuantity,emptyCart} = cartSlice.actions
