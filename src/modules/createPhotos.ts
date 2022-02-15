import createAlbum from './createAlbum';
import photoHandler from './photoHandler';

export default function createPhotos (photos:Array<any>, wrapper:HTMLElement, id:string):void {
  const albumId:number = parseInt(id, 10);

  const container:HTMLElement = document.createElement('ul');
  container.classList.add('album');
  container.classList.add('photos');

  const backBtn:HTMLElement = document.createElement('button');
  backBtn.textContent = 'back to albums';
  backBtn.classList.add('primary-button');

  // eslint-disable-next-line array-callback-return
  photos.map((photo: { albumId: number; url: string; title: string; }) => {
    if (photo.albumId === albumId) {
      const item:HTMLElement = document.createElement('li');
      item.classList.add('album__photo-item');

      const imageContainer:HTMLElement = document.createElement('div');
      imageContainer.classList.add('album__image-container');

      const image:HTMLElement = document.createElement('img');
      image.classList.add('album__image');
      image.setAttribute('src', photo.url);
      image.setAttribute('alt', 'photo');

      const title:HTMLElement = document.createElement('p');
      title.classList.add('album__title');
      title.textContent = photo.title;

      container.append(item);
      item.append(imageContainer);
      imageContainer.append(image);
      item.append(title);
    }
  });

  wrapper.append(backBtn);
  wrapper.append(container);

  backBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-param-reassign
    wrapper.textContent = '';

    const albums:Array<any> = JSON.parse(localStorage.getItem('albums'));

    createAlbum(albums, wrapper, photoHandler);
  });
}
