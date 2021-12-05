import { v4 as uuidv4 } from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

let users = {
  [idOne]: {
    id: idOne,
    firstName: 'Christian',
    lastName: 'Boyle',
    isDeveloper: true,
  },
  [idTwo]: {
    id: idTwo,
    firstName: 'Lizzy',
    lastName: 'Boyle',
    isDeveloper: false,
  },
};

const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error('Users not found')), 250);
    }

    setTimeout(() => resolve(Object.values(users)), 250);
    resolve(Object.values(users));
  });

// usage (1)
// getUsers()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// usage (2)
const doGetUsers = async () => {
  try {
    const result = await getUsers();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doGetUsers();
