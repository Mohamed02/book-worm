import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchData, sendCartData } from './store/cart-actions';
let isInitial=true;
function App() {
  const dispatch= useDispatch();
  const cart = useSelector((state)=>state.cart);
  const notification = useSelector((state)=>state.ui.notification);
  
  useEffect(()=>{
    dispatch(fetchData(cart));
  },[]);

  useEffect(()=>{
  
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
    
  },[cart,dispatch]);
  return (
    <>
    {notification && <Notification status={notification?.status} title={notification?.title} message={notification?.message}/>}
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
