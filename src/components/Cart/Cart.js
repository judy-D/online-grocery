import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { clearCart } from "../../redux/Shopping/shopping-actions"

const Cart = (props) => {

 const [ totalPrice, setTotalPrice ] = useState(0);
 const [ totalItems, setTotalItem ] = useState(0);
 const [ result, setResult ] = useState([]);

 const clearCart = () => {
  props.cart.splice(0,props.cart.length)
  // console.log(cart)
  setResult(props.cart);
  props.onClearCart()

}

 useEffect(() => {
   let Items = 0;
   let price = 0;

  //  console.log("effetc" + cart)

   console.log("res "+ result);

   props.cart.forEach(item => {
     Items += item.qty;
     price += item.qty * item.price;
   })

   setTotalPrice(price);
   setTotalItem(Items)
 }, [props.cart, result, totalPrice, totalItems, setTotalPrice, setTotalItem])

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {props.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button> <br />
        <button className={styles.summary__checkoutBtn} onClick={clearCart} >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => (dispatch(clearCart()))
  }
};


export default connect(mapStateToProps, mapDispatchToProps) (Cart);
