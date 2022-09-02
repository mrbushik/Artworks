const usersPicture = [
  {
    id: '1111',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Graphic arts',
    picture: 1,
  },
  {
    id: '22222',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    type: 'Sculpture',
    picture: 2,
  },
  {
    id: '3333',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 3,
  },
  {
    id: '444',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '111102',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Portrait',
    picture: 1,
  },
  {
    id: '2222223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    type: 'Graphic arts',
    picture: 3,
  },
  {
    id: '3333331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    type: 'Architecture',
    picture: 4,
  },
  {
    id: '44414',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    type: 'Portrait',
    picture: 1,
  },
  {
    id: '11110132',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '22227223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    type: 'Graphic arts',
    picture: 3,
  },
  {
    id: '333332331',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '4440914',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    type: 'Architecture',
    picture: 2,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(usersPicture);
    }, 1000);
  });
export default {
  fetchAll,
};
