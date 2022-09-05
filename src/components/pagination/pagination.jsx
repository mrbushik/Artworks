/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';
import './pagination.scss';
import { Arrow } from '../../icons';
import PropTypes from 'prop-types';
function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
  const [pageSwitch, setPageSwitch] = React.useState(currentPage);
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const viewNextPage = () => {
    if (pageSwitch < pageCount - 1) {
      setPageSwitch((pervState) => pervState + 1);
    }
  };
  const viewPerviusPage = () => {
    if (pageSwitch >= 2) {
      setPageSwitch((pervState) => pervState - 1);
    }
  };

  const cutPagesArray = (numberPage) => {
    if (pages.length === 3 || pages.length < 3) {
      return pages;
    } else {
      return pages.slice(numberPage - 1, numberPage + 2);
    }
  };

  const targetPages = cutPagesArray(pageSwitch);
  return (
    <nav className="pagination-main__container">
      <div className="pagination-container">
        <ul className="pagination-list">
          <li onClick={viewPerviusPage}>
            {' '}
            <Arrow />
          </li>
          {targetPages.map((page) => (
            <li
              onClick={() => onPageChange(page)}
              className={page === currentPage ? 'pagination-active' : ''}
              key={'page ' + page}>
              <a>{page}</a>
            </li>
          ))}
          <li className="pagination-plug">...</li>
          {pages.length > 3 ? (
            <li onClick={() => onPageChange(pages[pages.length - 1])}>{pages[pages.length - 1]}</li>
          ) : (
            ''
          )}

          <li onClick={viewNextPage}>
            {' '}
            <Arrow />
          </li>
        </ul>
        <div className="pagination-items__counter">
          <span className="pagination-counter__text">
            {' '}
            {currentPage * 4 - 4}-{currentPage * 4} of {itemsCount} Results
          </span>
        </div>
      </div>
    </nav>
  );
}
Pagination.propTypes = {
  // itemsCount, pageSize, onPageChange, currentPage
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
