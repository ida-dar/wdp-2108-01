import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    changeRWD: PropTypes.func,
    rwd: PropTypes.func,
  };

  componentDidMount() {
    const func = () => this.setRWD(this.props);
    func();
    window.addEventListener('resize', func);
  }

  setRWD(props) {
    const { rwd, changeRWD } = this.props;
    const width = window.outerWidth;

    if (width <= 767) {
      changeRWD('phones');
    } else if (width <= 991) {
      changeRWD('tablets');
    } else {
      changeRWD('desktops');
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
