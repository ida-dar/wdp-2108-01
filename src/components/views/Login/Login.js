import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.root}>
    <div className={styles.container + ' col-md-6'}>
      <form className={styles.formContainer}>
        <label className={styles.label}>
          {' '}
          Email <br />
          <input className={styles.input} name='email' type='email' />
        </label>
        <label className={styles.label}>
          {' '}
          Hasło <br />
          <input className={styles.input} name='password' type='password' />
        </label>
        <span>
          {' '}
          Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>{' '}
        </span>
        <form className={styles.buttonForm} action={`${process.env.PUBLIC_URL}/`}>
          <button type='submit'>Zaloguj się</button>
        </form>
      </form>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default Login;
