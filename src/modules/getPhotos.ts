interface Album {
  [key: string]:string;
}

export default async function getPhotos():Promise<any> {
  try {
    const photosURL:string = 'http://jsonplaceholder.typicode.com/photos';

    const receivePhotos = await fetch(photosURL);
    const photos: Album = await receivePhotos.json();

    return photos;
  } catch (error) {
    throw new Error(error);
  }
}
