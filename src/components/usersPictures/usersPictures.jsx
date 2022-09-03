import React from 'react';
import { Arrow } from '../../icons';
import SearchInput from '../form/searchInput/searchInput';
import SelectedRadio from '../form/selectedRadio/selectedRadio';
import UserItem from '../userItem/userItem';
import Pagination from '../pagination/pagination';
import './usersPictures.scss';
import { paginate } from '../../utils/paginate';
function UsersPictures({ usersArts }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 4;
  const [data, setData] = React.useState({
    activeSelect: false,
    selectedCategory: '',
    activeInput: false,
    inputValue: '',
  });

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleChange = (target) => {
    setData((pervState) => ({ ...pervState, [target.name]: target.value }));
  };

  const handleShowMenu = () => {
    setData((pervState) => ({ ...pervState, activeSelect: !pervState.activeSelect }));
  };
  const handleShowSearch = () => {
    setData((pervState) => ({ ...pervState, activeInput: !pervState.activeInput }));
  };

  const inputSearch = data.selectedCategory
    ? usersArts.filter((item) => item.type === data.selectedCategory)
    : usersArts;

  const filteredUsers = inputSearch
    ? inputSearch.filter(
        (user) => user.fullName.toLowerCase().indexOf(data.inputValue.toLowerCase()) !== -1,
      )
    : inputSearch;

  const usersCrop = paginate(filteredUsers, currentPage, pageSize);
  const count = filteredUsers.length;

  return (
    <section className="artworks">
      <div className="container">
        <div className="section-description">
          <h2>Artworks</h2>
          <h2>588</h2>
        </div>
        <div className="artworks-filters__wraper">
          <div className="category-filter">
            <span>Category</span>

            <span className="wraper-arrow__button" onClick={handleShowMenu}>
              <Arrow />
            </span>
            {data.activeSelect && (
              <SelectedRadio
                categories={['Sculpture', 'Architecture', 'Landscape', 'Graphic arts', 'Portrait']}
                onChange={handleChange}
                value={data.selectedCategory}
                name="selectedCategory"
              />
            )}
          </div>
          <div className="name-filter">
            <span>Name</span>
            <span className="wraper-arrow__button" onClick={handleShowSearch}>
              <Arrow />
            </span>
            {data.activeInput && (
              <SearchInput value={data.inputValue} name="inputValue" onChange={handleChange} />
            )}
          </div>
        </div>
        <div className="wraper-user__items">
          {count > 0 && usersCrop.map((user) => <UserItem key={user.id} userInfo={user} />)}
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default UsersPictures;
