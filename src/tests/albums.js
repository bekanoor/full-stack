async function getCollection() {
  try {
    const albumsURL = 'http://jsonplaceholder.typicode.com/albums';

    const getAlbums = await fetch(albumsURL);
    const albums = await getAlbums.json();

    return albums;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getCollection;
