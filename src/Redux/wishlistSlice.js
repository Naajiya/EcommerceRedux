import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addTowishList: ((state, action) => {
            state.push(action.payload)
        }),
        // action -get id from wishlist
        removeFromWishlist: ((state, action) => {
           return state.filter(item=>item.id!=action.payload)
        })

    }
})

export const { addTowishList } = wishSlice.actions
export const {removeFromWishlist}=wishSlice.actions
export default wishSlice.reducer



