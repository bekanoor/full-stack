async function getPhotos() {
  try {
    const photosURL = 'http://jsonplaceholder.typicode.com/photos';

    const receivePhotos = await fetch(photosURL);
    const photos = await receivePhotos.json();

    return photos;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getPhotos;
