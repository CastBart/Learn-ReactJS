import classes from './CartButton.module.css';

import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.totalQuantity)

  const showCartHandler = () =>{
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
