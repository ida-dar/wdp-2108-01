import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Register = () => (
  <div className={styles.root}>
    <div className={styles.container + ' col-md-4 justify-content-center'}>
      <div className={styles.account + ' row no-gutters justify-content-between'}>
        {/* radio account inputs */}
        <label className={styles.radio}>
          {' '}
          <input name='account' type='radio' />
          Mam konto
        </label>
        <label className={styles.radio}>
          {' '}
          <input name='noAccount' type='radio' />
          Nie mam konta
        </label>
      </div>
      <form className={styles.formContainer}>
        <h5>Podaj dane do rejestracji</h5>
        {/* text inputs */}
        <label className={styles.label}>
          {' '}
          <input
            className={styles.input}
            name='email'
            type='email'
            placeholder='E-mail *'
          />
        </label>
        <label className={styles.label}>
          {' '}
          <input
            className={styles.input}
            name='password'
            type='password'
            placeholder='Hasło *'
          />
        </label>
        <label className={styles.label}>
          {' '}
          <input
            className={styles.input}
            name='passwordRepeat'
            type='password'
            placeholder='Powtórz hasło *'
          />
        </label>
        <div className={styles.switchContainer}>
          <label className={styles.switch}>
            <input type='checkbox' />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
          Pokaż hasło
        </div>
        {/* checkboxes */}
        <label className={styles.labelCheckbox}>
          {' '}
          <input type='checkbox' />
          Zaznacz wszystkie
        </label>
        <label className={styles.labelCheckbox}>
          {' '}
          <input type='checkbox' />
          Akceptuję warunki <a>regulaminu</a> *
        </label>
        <label className={styles.labelCheckbox}>
          {' '}
          <input type='checkbox' />
          Tak, tak! Chcę otrzymywać JEŻowy newsletter
        </label>
        {/* sumbit */}
        <div
          className={
            styles.buttonForm +
            ' row no-gutters justify-content-between align-items-center'
          }
        >
          <Link to='/'>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Wróć
          </Link>
          <Link to='/'>
            {' '}
            <button type='submit' className={styles.button}>
              Zarejestruj się
            </button>
          </Link>
        </div>
      </form>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default Register;
