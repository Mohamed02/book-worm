import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';
import { uiActions } from '../../store';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const totalQuantity= useSelector((state)=> state.cart.totalQuantity);
  const dispatch= useDispatch();
  const cartOnClickHandler=()=>{
    dispatch(uiActions.toggleCart());
  }
  return (
    <button onClick={cartOnClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
