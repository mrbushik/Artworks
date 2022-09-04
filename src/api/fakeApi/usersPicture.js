const usersPicture = [
  {
    id: '1ews111',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Graphic arts',
    picture: 1,
  },
  {
    id: '22rwa222',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    type: 'Sculpture',
    picture: 2,
  },
  {
    id: '33wrd33',
    fullName: 'Alice Gordan',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 3,
  },
  {
    id: '44eeq4',
    fullName: 'Timothy Taylor',
    pictureName: 'Mountain landscape',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '11te1102',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Portrait',
    picture: 1,
  },
  {
    id: '22yh22223',
    fullName: 'Peggy Wood',
    pictureName: 'Still life V',
    type: 'Graphic arts',
    picture: 3,
  },
  {
    id: '33rf33331',
    fullName: 'Anton Antonov',
    pictureName: 'Surrounded',
    type: 'Architecture',
    picture: 4,
  },
  {
    id: '44ed414',
    fullName: 'Piter Parker',
    pictureName: 'Mountain landscape',
    type: 'Portrait',
    picture: 1,
  },
  {
    id: '1ed1110132',
    fullName: 'George Dillan',
    pictureName: 'Forest silence',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '2r2227223',
    fullName: 'Andrey Kovalev',
    pictureName: 'Still life V',
    type: 'Graphic arts',
    picture: 3,
  },
  {
    id: '3er33332331',
    fullName: 'Vasya Ivanov',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '444we0914',
    fullName: 'Ivan Ivanov',
    pictureName: 'Mountain landscape',
    type: 'Architecture',
    picture: 2,
  },
  {
    id: '10ee132',
    fullName: 'Artem Ivanov',
    pictureName: 'Forest silence',
    type: 'Sculpture',
    picture: 4,
  },
  {
    id: '1022af332',
    fullName: 'Arina Ivanova',
    pictureName: 'Still life V',
    type: 'Architecture',
    picture: 3,
  },
  {
    id: '09eee9331',
    fullName: 'Nikola Tesla',
    pictureName: 'Surrounded',
    type: 'Landscape',
    picture: 1,
  },
  {
    id: '3456542f914',
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
