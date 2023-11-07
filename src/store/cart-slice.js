import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({

    name:"cart",
    initialState: {
        cartItems:[],
        totalQuantity:0,
        changed:false
    },
    reducers: {
        replaceCart:(state,action) => {
            state.cartItems=action.payload.cartItems;
            state.totalQuantity=action.payload.totalQuantity;
        },
        addItem: (state,action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.itemId === action.payload.itemId);
            console.log("item index"+ action.payload.itemId);
            if(itemIndex>=0){
                const exisitingQuantity=state.cartItems[itemIndex].quantity;
                const updatedQuantity=exisitingQuantity+action.payload.quantity;
                state.cartItems[itemIndex].quantity=updatedQuantity;
                state.cartItems[itemIndex].total= (action.payload.price)*(updatedQuantity);
            }
            else {
                const total=action.payload.quantity * action.payload.price;
                state.cartItems.push({...action.payload,total});
               
            }
            state.totalQuantity=state.totalQuantity+action.payload.quantity;
            state.changed=true;
            console.log(" total cart items" +state.cartItems.length);
        },
        incrementItem:(state,action)=>{
            
            const itemIndex = state.cartItems.findIndex((item)=>item.itemId === action.payload.itemId);
            const currentItem=state.cartItems[itemIndex];
            console.log("quatity:"+currentItem.quantity+ "price:"+currentItem.price);
            state.cartItems[itemIndex].quantity=currentItem.quantity+1;
            state.cartItems[itemIndex].total= (currentItem.quantity)*(currentItem.price);
            state.totalQuantity++;
            state.changed=true;
        },
        decrementItem:(state,action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.itemId === action.payload.itemId);
            const currentItem=state.cartItems[itemIndex];
            if(currentItem.quantity ===1){
                state.cartItems.splice(itemIndex,1)
            }else{
                state.cartItems[itemIndex].quantity=currentItem.quantity-1;
                state.cartItems[itemIndex].total= (currentItem.quantity)*(currentItem.price);
            }
             state.totalQuantity++;
             state.changed=true;
             
        }
    }
});
export default cartSlice