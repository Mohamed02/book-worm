
import { uiActions,cartAction } from "./index";

export const sendCartData = (cart) =>{
    return async(dispatch)=>{

        const sendRequest= async()=>{
            const response = await fetch('https://react-app-24320-default-rtdb.firebaseio.com/cart.json',
            {
              method:"PUT",
              body: JSON.stringify(
                {
                cartItems:cart.cartItems,
                totalQuantity:cart.totalQuantity
            })
            });
            return await response.json();
        }
    dispatch(uiActions.showNotification({
        status:'pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }));
  
       try{
        await sendRequest();
       }catch(error){
        dispatch(uiActions.showNotification({
            status:'error',
            title: 'Success!',
            message: 'Send Cart successfully'
          }))
      
       }
  
      dispatch(uiActions.showNotification({
        status:'success',
        title: 'Success!',
        message: 'Send Cart successfully'
      }))
  
    }

}

export const fetchData = () =>{
    return async(dispatch)=>{
        const fetchData= async()=>{
            const response = await fetch('https://react-app-24320-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Sending failed');
            }
            return await response.json();
        }

        try{
            const response = await fetchData();
            dispatch(cartAction.replaceCart(response));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title: 'Error!',
                message: 'Error Occured'
            }))
        }
        

    }
}