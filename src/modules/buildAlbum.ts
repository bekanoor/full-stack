import getAlbums from './getAlbums'
import getUsers from './getUsers'

export default async function buildAlbum():Promise<any> {
  let albums:Array<any>;
  let users:Array<any>;

  await getAlbums().then((res) => {
    albums = res;
  });

  await getUsers().then((res) => {
    users = res;
  });

  // eslint-disable-next-line max-len
  const collection:Array<object> = albums.map((album) => ({ ...album, user: users.find(({ id }) => id === album.userId) }));

  return collection;
}
