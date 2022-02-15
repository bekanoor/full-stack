interface Album {
  [key: string]:string | number;
}

export default async function getCollection():Promise<any> {
  try {
    const usersURL:string = 'http://jsonplaceholder.typicode.com/users';
    const albumsURL:string = 'http://jsonplaceholder.typicode.com/albums';

    const getUsers = await fetch(usersURL);
    const users: Album[] = await getUsers.json();

    const getAlbums = await fetch(albumsURL);
    const albums: Album[] = await getAlbums.json();

    // eslint-disable-next-line max-len
    const collection:Array<object> = albums.map((album) => ({ ...album, user: users.find(({ id }) => id === album.userId) }));

    return collection;
  } catch (error) {
    throw new Error(error);
  }
}
