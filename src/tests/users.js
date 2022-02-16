async function getUsers() {
  try {
    const usersURL = 'http://jsonplaceholder.typicode.com/users';

    const receiveUsers = await fetch(usersURL);
    const users = await receiveUsers.json();

    return users;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getUsers;
