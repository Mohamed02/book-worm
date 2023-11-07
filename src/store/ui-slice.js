import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        displayCart:false,
        notification: null
    },
    reducers:{
        toggleCart(state){
            state.displayCart= !state.displayCart;
        },
        showNotification(state,action){
            state.notification= {
                status:action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }

        }
    }
});
export default uiSlice;