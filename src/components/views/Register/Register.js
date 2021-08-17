import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const formValidation = event => {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('passwordRepeat').value;

    if (password !== passwordRepeat) {
      window.alert('Sprawdź czy hasła są takie same');
      event.preventDefault();
      return false;
    } else if (
      password === passwordRepeat &&
      firstName.length <= 30 &&
      firstName.length >= 3 &&
      lastName.length <= 30 &&
      lastName.length >= 3 &&
      email.includes('@') &&
      password.length >= 3 &&
      passwordRepeat.length >= 3
    ) {
      return true;
    } else {
      window.alert(
        'Sprawdź czy wszystkie pola z gwiazdką są uzupełnione oraz czy dane w nich są poprawne'
      );
      event.preventDefault();
      return false;
    }
  };

  const passwordMatch = () => {
    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('passwordRepeat').value;

    if (password !== passwordRepeat) {
      document.getElementById('info').innerHTML = 'Hasła nie są takie same';
    } else {
      document.getElementById('info').innerHTML = 'Hasła są takie same';
    }
  };

  const [values, setValues] = React.useState({
    showPassowrd: false,
  });

  const handleCLickShowPassowrd = () => {
    setValues({ ...values, showPassowrd: !values.showPassowrd });
  };

  return (
    <div className={styles.root}>
      <div className={styles.container + ' col-md-4 justify-content-center'}>
        <div className={styles.account + ' row no-gutters justify-content-between'}>
          {/* radio account inputs */}
          <label className={styles.radio}>
            {' '}
            <input name='account' id='account' type='radio' />
            Mam konto
          </label>
          <label className={styles.radio}>
            {' '}
            <input name='noAccount' id='notAccount' type='radio' />
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
              type='text'
              id='first_name'
              name='first_name'
              placeholder='Imię*'
              minLength='3'
              maxLength='30'
            />
            <p className={styles.wrong}>Twoje Imię musi mieć od 3 do 30 znaków </p>
          </label>
          <label className={styles.label}>
            {' '}
            <input
              className={styles.input}
              type='text'
              id='last_name'
              name='last_name'
              placeholder='Nazwisko*'
              minLength='3'
              maxLength='30'
            />
            <p className={styles.wrong}>Twoje Nazwisko musi mieć od 3 do 30 znaków </p>
          </label>

          <label className={styles.label}>
            {' '}
            <input
              className={styles.input}
              id='email'
              name='email'
              type='email'
              placeholder='E-mail *'
            />
            <p className={styles.wrong}>Twoje e-mail musi zawierać znak: @ </p>
          </label>
          <label className={styles.label}>
            {' '}
            <input
              className={styles.input}
              name='password'
              type={values.showPassowrd ? 'text' : 'password'}
              id='password'
              placeholder='Hasło *'
              minLength='3'
              onKeyUp={passwordMatch}
            />
            <p className={styles.wrong}>Twoje Hasło musi mieć conajmniej 3 znaki</p>
          </label>
          <label className={styles.label}>
            {' '}
            <input
              className={styles.input}
              name='passwordRepeat'
              id='passwordRepeat'
              type={values.showPassowrd ? 'text' : 'password'}
              placeholder='Powtórz hasło *'
              minLength='3'
              onKeyUp={passwordMatch}
            />
            <p className={styles.info} id='info'></p>
          </label>
          <div className={styles.switchContainer}>
            <label className={styles.switch}>
              <input type='checkbox' onClick={handleCLickShowPassowrd} />
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
            <Link onClick={formValidation} to='/'>
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
};

// ProductList.propTypes = {};

export default Register;
