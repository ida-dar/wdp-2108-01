import React from 'react';
import styles from './Cart.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const Cart = ({ products, removeFromCart, clearCart, quantityDown, quantityUp }) => {
  const calculateSubtotal = products => {
    let subtotal = 0;
    for (const product of products) {
      subtotal += product.price * product.qty;
    }
    return subtotal;
  };

  const calculateTotal = products => {
    return products.length == 0 ? 0 : calculateSubtotal(products) + 20;
  };

  return (
    <div className={styles.cartBox}>
      <table className={styles.products}>
        <thead>
          <tr className={styles.tableLable}>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className={styles.tableContent}>
              <td>
                <div className={styles.delete} onClick={() => removeFromCart(product)}>
                  x
                </div>
                <div className={styles.img}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.description}>{product.name}</div>
              </td>
              <td>
                <div>{`$${product.price}`}</div>
              </td>
              <td>
                <div>
                  <Button variant='qty' onClick={() => quantityDown(product)}>
                    -
                  </Button>
                  <input type='text' placeholder='1' value={product.qty}></input>
                  <Button variant='qty' onClick={() => quantityUp(product)}>
                    +
                  </Button>
                </div>
              </td>
              <td>
                <div>{`$${product.price * product.qty}`}</div>
              </td>
            </tr>
          ))}
          <tr className={styles.action}>
            <td>
              <div className={styles.coupon}>
                <input type='text' placeholder='Coupon code' />
              </div>
              <div className={styles.apply}>
                <Button variant='main'>APPLY COUPON</Button>
              </div>
            </td>
            <td colSpan='3'>
              <div className={styles.update}>
                <Button variant='main'>UPDATE CART</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className={styles.summary}>
        <thead>
          <tr className={styles.totalCart}>
            <th colSpan='2'>Cart Totals</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.totalSummary}>
            <td className={styles.subtotal}>
              <div className={styles.subtotal}>Subtotal</div>
            </td>
            <td>
              <div className={styles.price}>${calculateSubtotal(products)}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.total}>Total</div>
            </td>
            <td>
              <div className={styles.price}>${calculateTotal(products)}</div>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <div className={styles.proceed}>
                <Button variant='main' onClick={clearCart}>
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      qty: PropTypes.number,
    })
  ),
  removeFromCart: PropTypes.func,
  clearCart: PropTypes.func,
  quantityDown: PropTypes.func,
  quantityUp: PropTypes.func,
};

Cart.defaultProps = {
  products: [],
};

export default Cart;
