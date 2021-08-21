import React from 'react';
import styles from './Cart.module.scss';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Cart = ({ products, removeFromCart, clearCart }) => {
  //const [clicks, setClicks] = React.useState(0);
  const [counter, setCounter] = React.useState(1);

  //let history = useHistory();

  // const redirect = () => {
  //   history.push('/');
  // };

  const handleRemove = product => {
    removeFromCart(product);
  };

  const handleCheckout = () => {
    clearCart();
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
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
                <div className={styles.delete} onClick={() => handleRemove(product)}>
                  x
                </div>
                <div className={styles.img}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.description}>{product.name}</div>
              </td>
              <td>
                <div>{`${product.price}$`}</div>
              </td>
              <td>
                <div>
                  <span onClick={() => handleDecrement()}>-</span>
                  <input type='text' value={counter} />
                  <span onClick={() => handleIncrement()}>+</span>
                </div>
              </td>
              <td>
                <div>{product.price * counter}</div>
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
              <div className={styles.price}>60$</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.total}>Total</div>
            </td>
            <td>
              <div className={styles.price}>150$</div>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <div className={styles.proceed}>
                <Button variant='main' onClick={handleCheckout}>
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
    })
  ),
  removeFromCart: PropTypes.func,
  clearCart: PropTypes.func,
};

Cart.defaultProps = {
  products: [],
};

export default Cart;
