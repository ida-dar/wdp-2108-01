import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import { validation } from '../../common/Validation/Validation.js';

const handleRequest = event => {
  event.preventDefault();
  validation();
};

const Login = () => (
  <div className={styles.root}>
    <div className={styles.container + ' col-md-6'}>
      <form className={styles.formContainer}>
        <label className={styles.label}>
          {' '}
          Email <br />
          <input className={styles.input} id='email' name='email' type='text' />
        </label>
        <label className={styles.label}>
          {' '}
          Hasło <br />
          <input
            className={styles.input}
            id='password'
            name='password'
            type='password'
          />
        </label>
        <span>
          {' '}
          Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>{' '}
        </span>
        <div className={styles.buttonContainer + ' cont'}>
          <button onClick={handleRequest}>Zaloguj się</button>
        </div>
      </form>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default Login;
