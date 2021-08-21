import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPreview.module.scss';
import BlogBox from '../../common/BlogBox/BlogBox';

class BlogPreview extends React.Component {
  state = {
    activePage: 0,
    isFading: false,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      isFading: true,
    });
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState({ isFading: false });
        }.bind(this),
        1000
      );
    }
  }

  render() {
    const { activePage } = this.state;
    const { blog } = this.props;

    const pagesCount = 3;
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Latest Blog</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={styles.articles}>
            {blog.map(article => (
              <div key={article.id} className='col-6 col-md-4 col-lg-3'>
                <BlogBox {...article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BlogPreview.propTypes = {
  blog: PropTypes.object,
};

// ProductList.propTypes = {};

export default BlogPreview;
