import createPhotos from "./createPhotos";
import getPhotos from "./getPhotos";

export default function photoHandler(e:any):void {
  const list:HTMLElement = document.querySelector('.album-wrapper');

  list.textContent = '';

  getPhotos().then((res) => createPhotos(res, list, e.target.id));
}
