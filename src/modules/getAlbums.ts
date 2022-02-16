interface Album {
  [key: string]:string | number;
}

export default async function getCollection():Promise<any> {
  try {
    const albumsURL:string = 'http://jsonplaceholder.typicode.com/albums';

    const getAlbums = await fetch(albumsURL);
    const albums: Album[] = await getAlbums.json();

    return albums;
  } catch (error) {
    throw new Error(error);
  }
}
