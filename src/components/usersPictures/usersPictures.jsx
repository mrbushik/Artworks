import React from 'react';
import api from '../../api';
import { Arrow } from '../../icons';
import SearchInput from '../form/searchInput/searchInput';
import SelectedRadio from '../form/selectedRadio/selectedRadio';
import UserItem from '../userItem/userItem';
import './usersPictures.scss';
function UsersPictures() {
  const [usersPicture, setUsersPicture] = React.useState();
  const [data, setData] = React.useState({
    activeSelect: false,
    selectedCategory: '',
    activeInput: false,
    inputValue: '',
  });

  React.useEffect(() => {
    api.usersPicture.fetchAll().then((data) => setUsersPicture(data));
  }, []);

  const handleChange = (target) => {
    setData((pervState) => ({ ...pervState, [target.name]: target.value }));
  };

  const handleShowMenu = () => {
    setData((pervState) => ({ ...pervState, activeSelect: !pervState.activeSelect }));
  };
  const handleShowSearch = () => {
    setData((pervState) => ({ ...pervState, activeInput: !pervState.activeInput }));
  };

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
          {usersPicture && usersPicture.map((user) => <UserItem key={user.id} userInfo={user} />)}
        </div>
      </div>
    </section>
  );
}

export default UsersPictures;
