interface Album {
  [key: string]:string | number;
}

export default async function getUsers():Promise<any> {
  try {
    const usersURL:string = 'http://jsonplaceholder.typicode.com/users';

    const receiveUsers = await fetch(usersURL);
    const users: Album[] = await receiveUsers.json();

    return users;
  } catch (error) {
    throw new Error(error);
  }
}
