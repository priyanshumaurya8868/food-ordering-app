import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useState, useEffect } from 'react';
const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [bh, set_bh] = useState (false)

  const btnClasses = `${classes.button} ${bh ? classes.bump : ''}`;


   useEffect(()=>{
    if (items.length === 0) {
      return;
    }
      set_bh(true)
     const timeOut  = setTimeout(()=>{
        set_bh(false)
      }, 300)
      return () =>{ clearTimeout(timeOut)};
   } , [items])

  return (
    <button className={btnClasses} onClick={props.onShowCart} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;




