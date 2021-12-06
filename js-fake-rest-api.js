import { v4 as uuidv4 } from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

// pseudo database
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

// pseudo API
const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error('Users not found')), 250);
    }

    setTimeout(() => resolve(Object.values(users)), 250);
  });

const doGetUsers = async () => {
  try {
    const result = await getUsers();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//doGetUsers();

const getUser = (id) =>
  new Promise((resolve, reject) => {
    const user = users[id];

    if (!user) {
      return setTimeout(() => reject(new Error('User not found')), 250);
    }

    setTimeout(() => resolve(users[id]), 250);
  });

const doGetUser = async (id) => {
  try {
    const result = await getUser(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doGetUser(idTwo);