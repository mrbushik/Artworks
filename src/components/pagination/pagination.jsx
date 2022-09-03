import React, { useState } from 'react';
import _, { set } from 'lodash';
import './pagination.scss';
import { Arrow } from '../../icons';
function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
  const [pageSwitch, setPageSwitch] = React.useState(currentPage);
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const viewNextPage = () => {
    if (pageSwitch < 4) {
      setPageSwitch((pervState) => pervState + 1);
    }
  };
  const viewPerviusPage = () => {
    if (pageSwitch >= 2) {
      setPageSwitch((pervState) => pervState - 1);
    }
  };

  const cutPagesArray = (numberPage) => {
    console.log('number' + numberPage);
    if (pages.length === 3 || pages.length < 3) {
      return pages;
    } else {
      return pages.slice(numberPage - 1, numberPage + 2);
    }
  };
  const targetPages = cutPagesArray(pageSwitch);
  console.log(targetPages);
  return (
    <nav>
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
      <div className="">
        {currentPage * 4 - 4}-{currentPage * 4} of {itemsCount}
      </div>
    </nav>
  );
}

export default Pagination;
