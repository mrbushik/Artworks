import React from 'react';
import Artwork1 from '../../img/picture/Artwork1st.png';
import Artwork2 from '../../img/picture/Artwork2nd.png';
import Artwork3 from '../../img/picture/Artwork3rd.png';
import Artwork4 from '../../img/picture/Artwork4th.png';
import Artist1 from '../../img/peopleAvatars/ArtistGeorge.png';
import Artist2 from '../../img/peopleAvatars/ArtistPeggy.png';
import Artist3 from '../../img/peopleAvatars/ArtistAlice.png';
import Artist4 from '../../img/peopleAvatars/ArtistThimony.png';
import './userItem.scss';
import { Basket } from '../../icons';
function UserItem({ userInfo, onDelete }) {
  const getImage = () => {
    // если данные были на сервере то этого можно избежать и сразу вставлять изображения
    if (userInfo.picture == 1) {
      return <img src={Artwork1} alt="artwork" />;
    } else if (userInfo.picture === 2) {
      return <img src={Artwork2} alt="artwork" />;
    } else if (userInfo.picture === 3) {
      return <img src={Artwork3} alt="artwork" />;
    } else if (userInfo.picture === 4) {
      return <img src={Artwork4} alt="artwork" />;
    }
  };
  const getAvatar = () => {
    // тоже самое при наличии данных сервера не пришлось писать костыли
    if (userInfo.fullName === 'George Dillan') {
      return <img src={Artist1} alt="artist" />;
    } else if (userInfo.fullName === 'Peggy Wood') {
      return <img src={Artist2} alt="artist" />;
    } else if (userInfo.fullName === 'Alice Gordan') {
      return <img src={Artist3} alt="artist" />;
    } else if (userInfo.fullName === 'Timothy Taylor') {
      return <img src={Artist4} alt="artist" />;
    }
  };

  return (
    <div className="user-picture__item">
      <div onClick={() => onDelete(userInfo.id)} className="user-basket-round">
        <Basket />
      </div>
      <div>{getImage()}</div>
      <div className="artist-info">
        <div className="artist-avatar">{getAvatar()}</div>
        <div className="artist-description">
          <h3>{userInfo.fullName}</h3>
          <h4>{userInfo.pictureName}</h4>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
