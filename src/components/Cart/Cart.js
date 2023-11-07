import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';


const Cart = (props) => {
  const {cartItems,displayCart}= useSelector((state)=>{ return {displayCart:state.ui.displayCart,
        cartItems:state.cart.cartItems}});
      const cartItemMarkup= cartItems.map((cartItem)=>{
        return (<CartItem key={cartItem.itemId}
          item={cartItem}
        />)
      })
  return (
    <>
      {displayCart && <Card className={classes.cart}><h2>Your Shopping Cart</h2>
      <ul>
        {cartItemMarkup}
      </ul></Card>}
      </>
  );
};

export default Cart;
