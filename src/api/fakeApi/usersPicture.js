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
    fullName: 'Anton Antonov',
    pictureName: 'Surrounded',
    type: 'Architecture',
    picture: 4,
  },
  {
    id: '44414',
    fullName: 'Piter Parker',
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
    fullName: 'Andrey Kovalev',
    pictureName: 'Still life V',
    type: 'Graphic arts',
    picture: 3,
  },
  {
    id: '333332331',
    fullName: 'Vasya Ivanov',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '4440914',
    fullName: 'Ivan Ivanov',
    pictureName: 'Mountain landscape',
    type: 'Architecture',
    picture: 2,
  },
  {
    id: '10132',
    fullName: 'Artem Ivanov',
    pictureName: 'Forest silence',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '1022332',
    fullName: 'Arina Ivanova',
    pictureName: 'Still life V',
    type: 'Architecture',
    picture: 3,
  },
  {
    id: '099331',
    fullName: 'Nikola Tesla',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '3456542914',
    fullName: 'Abram Linkoln',
    pictureName: 'Mountain landscape',
    type: 'Graphic arts',
    picture: 2,
  },
  {
    id: '1013992',
    fullName: 'Vladilen Ivanov',
    pictureName: 'Forest silence',
    type: 'Architecture',

    picture: 4,
  },
  {
    id: '102266332',
    fullName: 'Karina Ivanova',
    pictureName: 'Surrounded',
    type: 'Sculpture',
    picture: 3,
  },
  {
    id: '099320231',
    fullName: 'Nikola Ibragimov',
    pictureName: 'Still life V',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '3456542914',
    fullName: 'Kate Ivanova',
    pictureName: 'Mountain landscape',
    type: 'Graphic arts',
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
