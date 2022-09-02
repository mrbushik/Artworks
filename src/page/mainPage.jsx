import React from 'react';
import Header from '../components/header/header';
import UsersPictures from '../components/usersPictures/usersPictures';
import api from '../api';

function MainPage() {
  const [usersItem, setUsersItem] = React.useState();
  React.useEffect(() => {
    api.usersPicture.fetchAll().then((data) => setUsersItem(data));
  }, []);
  return (
    <>
      <Header />
      {usersItem && <UsersPictures usersArts={usersItem} />}
    </>
  );
}

export default MainPage;
