import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';

const ProductItem = (props) => {
  const { itemId,title, price, description } = props;
  const dispatch=useDispatch();
  const addItemHandler=()=>{
    dispatch(cartAction.addItem({
      itemId,
      title,
      price,
      quantity:1,
      total:1,
      description
    }))
  }
  return (
    <li id={itemId} className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
