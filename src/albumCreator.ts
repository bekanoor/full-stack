import getAlbums from './modules/buildAlbum';
import createAlbum from './modules/createAlbum';
import photoHandler from './modules/photoHandler';

class AlbumCreator {
  private wrapper;

  constructor(wrapper:HTMLElement) {
    this.wrapper = wrapper;
  }

  create() {
    getAlbums().then(res => {
      createAlbum(res, this.wrapper, photoHandler);

      localStorage.setItem('albums', JSON.stringify(res));
    });
  }
}

export default AlbumCreator;
