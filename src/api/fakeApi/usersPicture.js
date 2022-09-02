const usersPicture = [
  {
    id: '1111',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    pictureLink: '../../img/picture/Artwork1st.png',
  },
  {
    id: '22222',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    pictureLink: '../../img/picture/Artwork2st.png',
  },
  {
    id: '3333',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    pictureLink: '../../img/picture/Artwork3st.png',
  },
  {
    id: '444',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    pictureLink: '../../img/picture/Artwork4st.png',
  },
  {
    id: '111102',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    pictureLink: '../../img/picture/Artwork1st.png',
  },
  {
    id: '2222223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    pictureLink: '../../img/picture/Artwork2st.png',
  },
  {
    id: '3333331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    pictureLink: '../../img/picture/Artwork3st.png',
  },
  {
    id: '44414',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    pictureLink: '../../img/picture/Artwork4st.png',
  },
  {
    id: '11110132',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    pictureLink: '../../img/picture/Artwork1st.png',
  },
  {
    id: '22227223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    pictureLink: '../../img/picture/Artwork2st.png',
  },
  {
    id: '333332331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    pictureLink: '../../img/picture/Artwork3st.png',
  },
  {
    id: '4440914',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    pictureLink: '../../img/picture/Artwork4st.png',
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(usersPicture);
    }, 100);
  });
export default {
  fetchAll,
};
