import React from 'react';
import _ from 'lodash';
import './pagination.scss';
function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  console.log(pages);
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li className={page === currentPage ? 'pagination-active' : ''} key={'page ' + page}>
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
