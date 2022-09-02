import React from 'react';
import { Arrow } from '../../icons';
import SearchInput from '../form/searchInput/searchInput';
import SelectedRadio from '../form/selectedRadio/selectedRadio';
import UserItem from '../userItem/userItem';
import './usersPictures.scss';
function UsersPictures({ usersArts }) {
  const [data, setData] = React.useState({
    activeSelect: false,
    selectedCategory: '',
    activeInput: false,
    inputValue: '',
  });

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
          {filteredUsers && filteredUsers.map((user) => <UserItem key={user.id} userInfo={user} />)}
        </div>
      </div>
    </section>
  );
}

export default UsersPictures;
