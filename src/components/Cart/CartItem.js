import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';

const CartItem = (props) => {
  const { itemId,title, quantity, total, price } = props.item;
  console.log("updatd total"+total);
  const dispatch=useDispatch();
  const incrementItemHandler=()=>{
    dispatch(cartAction.incrementItem({
      itemId
    }))
  };
  const decrementItemHandler=()=>{
    dispatch(cartAction.decrementItem({
      itemId
    }))
  }
 

  return (
    <li id={itemId} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementItemHandler}>-</button>
          <button onClick={incrementItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
