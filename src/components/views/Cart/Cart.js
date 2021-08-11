
import React from 'react';
import styles from './Cart.module.scss';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';



const Cart = () => {
  //const [clicks, setClicks] = React.useState(0);

  let history = useHistory();

  const redirect = () => {
    history.push('/');
  };


  return(
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
          <tr className ={styles.tableContent}>
            <td>
              <div className={styles.delete}>x
                { /*<FontAwesomeIcon className={styles.icon} icon={faTrashAlt}>*/}
              </div>
              <div className={styles.img}><img
                src={
                  'https://images.pexels.com/photos/5789955/pexels-photo-5789955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
                alt='image1'
              /></div>
              <div className={styles.description}>Aenean Ru Bristique 1</div>
            </td>
            <td>
              <div>10$</div>
            </td>
            <td>
              <div>
                <span>-</span>
                <input type="text" placeholder="1"/>
                <span>+</span>
              </div>
            </td>
            <td>
              <div>40$</div>
            </td>
          </tr>
          <tr className ={styles.tableContent}>
            <td>
              <div className={styles.delete}>x</div>
              <div className={styles.img}><img
                src={
                  'https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                alt='image2'
              />
              </div>
              <div className={styles.description}>Aenean Ru Bristique 4</div>
            </td>
            <td>
              <div>10$</div>
            </td>
            <td>
              <div>
                <span>-</span>
                <input type="text" placeholder="1"/>
                <span>+</span>
              </div>
            </td>
            <td>
              <div>40$</div>
            </td>
          </tr>
          <tr className ={styles.tableContent}>
            <td>
              <div className={styles.delete}>x</div>
              <div className={styles.img}><img
                src={
                  'https://images.pexels.com/photos/7031715/pexels-photo-7031715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                alt='image3'
              />
              </div>
              <div className={styles.description}>Aenean Ru Bristique 5</div>
            </td>
            <td>
              <div>10$</div>
            </td>
            <td>
              <div>
                <span>-</span>
                <input type="text" placeholder="1"/>
                <span>+</span>
              </div>
            </td>
            <td>
              <div>40$</div>
            </td>
          </tr>
          <tr className={styles.action}>
            <td>
              <div className={styles.coupon}>
                <input type="text" placeholder="Coupon code"/>
              </div>
              <div className={styles.apply}>
                <Button variant='main'>APPLY COUPON</Button>
              </div>
            </td>
            <td colSpan="3">
              <div className={styles.update}>
                <Button variant='main'>UPDATE CART</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <table className={styles.summary}>
        <thead>
          <tr className={styles.totalCart}>
            <th colSpan="2">Cart Totals</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.totalSummary}>
            <td className={styles.subtotal}>
              <div className={styles.subtotal}>
            Subtotal
              </div>
            </td>
            <td>
              <div className={styles.price}>
           60$
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.total}>
            Total
              </div>
            </td>
            <td>
              <div className={styles.price}>
           150$
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className={styles.proceed}>
                <Button variant='main' onClick={redirect}>PROCEED TO CHECKOUT</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,

};


export default Cart;
