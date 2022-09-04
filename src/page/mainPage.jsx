import React from 'react';
import Header from '../components/header/header';
import UsersPictures from '../components/usersPictures/usersPictures';
import api from '../api';
import Footer from '../components/footer/footer';

function MainPage() {
  const [usersItem, setUsersItem] = React.useState();
  React.useEffect(() => {
    api.usersPicture.fetchAll().then((data) => setUsersItem(data));
  }, []);
  const handleDeleteUsersItem = (id) => {
    setUsersItem(usersItem.filter((user) => user.id !== id));
  };
  return (
    <>
      <Header />
      {usersItem && <UsersPictures usersArray={usersItem} onDelete={handleDeleteUsersItem} />}
      <Footer />
    </>
  );
}

export default MainPage;
