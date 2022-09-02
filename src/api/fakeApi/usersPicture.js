const usersPicture = [
  {
    id: '1111',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    picture: 1,
  },
  {
    id: '22222',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    picture: 2,
  },
  {
    id: '3333',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    picture: 3,
  },
  {
    id: '444',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    picture: 4,
  },
  {
    id: '111102',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    picture: 1,
  },
  {
    id: '2222223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    picture: 3,
  },
  {
    id: '3333331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    picture: 4,
  },
  {
    id: '44414',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    picture: 1,
  },
  {
    id: '11110132',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    picture: 4,
  },
  {
    id: '22227223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    picture: 3,
  },
  {
    id: '333332331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    picture: 1,
  },
  {
    id: '4440914',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    picture: 2,
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
