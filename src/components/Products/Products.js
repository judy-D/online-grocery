import React from "react";
import styles from "./Products.module.css";
import { connect } from 'react-redux';
import Product from "./Product/Product";
// import { clearCart } from "../../redux/Shopping/shopping-actions"

const Products = ({ products }) => {


  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.shop.product,
  }
}

export default connect(mapStateToProps)(Products);
