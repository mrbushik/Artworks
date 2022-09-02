import React from 'react';
import api from '../../api';
import { Arrow } from '../../icons';
import SelectedRadio from '../form/selectedRadio/selectedRadio';
import UserItem from '../userItem/userItem';
import './usersPictures.scss';
function UsersPictures() {
  const [usersPicture, setUsersPicture] = React.useState();
  const [category, setCategory] = React.useState({ active: true, selectedCategory: '' });

  React.useEffect(() => {
    api.usersPicture.fetchAll().then((data) => setUsersPicture(data));
    console.log(usersPicture);
  }, []);
  const handleChange = (target) => {
    setCategory((pervState) => ({ ...pervState, selectedCategory: target.value }));
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
            <Arrow />
            <SelectedRadio
              categories={['Sculpture', 'Architecture', 'Landscape', 'Graphic arts', 'Portrait']}
              onChange={handleChange}
              value={category.selectedCategory}
            />
          </div>
          <div className="name-filter">
            <span>Name</span>
            <Arrow />
          </div>
        </div>
        {usersPicture && usersPicture.map((user) => <UserItem key={user.id} userInfo={user} />)}
      </div>
    </section>
  );
}

export default UsersPictures;
