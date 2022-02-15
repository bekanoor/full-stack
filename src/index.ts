import AlbumCreator from './albumCreator';
import './style/style.scss';

const list:HTMLElement = document.querySelector('.album-wrapper');

const album = new AlbumCreator(list);

album.create();
