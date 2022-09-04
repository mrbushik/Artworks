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
  const [usersData, setUsersData] = React.useState(usersArts);

  const pageSize = 4;
  const [data, setData] = React.useState({
    activeSelect: false,
    selectedCategory: '',
    activeInput: false,
    inputValue: '',
    userId: '',
  });

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleChange = (target) => {
    setData((pervState) => ({ ...pervState, [target.name]: target.value, userId: '' }));
    if (data.inputValue) {
      setUsersData(
        usersArts.filter(
          (user) => user.fullName.toLowerCase().indexOf(data.inputValue.toLowerCase()) !== -1,
        ),
      );
      // setData((pervState) => ({ ...pervState, selectedCategory: '' }));
    }
    if (data.selectedCategory) {
      setUsersData(usersArts.filter((item) => item.type === data.selectedCategory));
      // setData((pervState) => ({ ...pervState, inputValue: '' }));
    }
  };
  const handleChangeInput = (target) => {
    setData((pervState) => ({ ...pervState, inputValue: target.value }));
    setUsersData(
      usersArts.filter(
        (user) => user.fullName.toLowerCase().indexOf(data.inputValue.toLowerCase()) !== -1,
      ),
    );
    setData((pervState) => ({ ...pervState, selectedCategory: '' }));
  };
  const handleChangeCategory = (target) => {
    setData((pervState) => ({ ...pervState, selectedCategory: target.value }));

    setUsersData(usersArts.filter((item) => item.type === target.value));
    setData((pervState) => ({ ...pervState, inputValue: '' }));
  };

  const handleShowMenu = () => {
    setData((pervState) => ({ ...pervState, activeSelect: !pervState.activeSelect, userId: '' }));
  };
  const handleShowSearch = () => {
    setData((pervState) => ({ ...pervState, activeInput: !pervState.activeInput, userId: '' }));
  };
  const handleDeleteUsersItem = (id) => {
    // filter(id);
    setUsersData(usersData.filter((user) => user.id !== id));
  };

  // console.log(deletedUsers);
  // const inputSearch = data.selectedCategory ? deletedUsers : deletedUsers;

  // const filteredUsers = inputSearch
  //   ? inputSearch.filter(
  //       (user) => user.fullName.toLowerCase().indexOf(data.inputValue.toLowerCase()) !== -1,
  //     )
  //   : inputSearch;

  const usersCrop = paginate(usersData, currentPage, pageSize);
  const count = usersData.length;

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
                onChange={handleChangeCategory}
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
              <SearchInput value={data.inputValue} name="inputValue" onChange={handleChangeInput} />
            )}
          </div>
        </div>
        <div className="wraper-user__items">
          {count > 0 &&
            usersCrop.map((user) => (
              <UserItem key={user.id} onDelete={handleDeleteUsersItem} userInfo={user} />
            ))}
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
