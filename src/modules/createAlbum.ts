export default function createAlbum(albums:Array<any>, wrapper:HTMLElement, handler:any):void {
  const container = document.createElement('ul');
  container.classList.add('album');

  // eslint-disable-next-line array-callback-return
  albums.map((album) => {
    const item:HTMLElement = document.createElement('li');
    item.classList.add('album__item');

    const albumPreview:HTMLElement = document.createElement('div');
    albumPreview.classList.add('album__preview');
    albumPreview.textContent = album.id;
    albumPreview.setAttribute('id', album.id);

    const albumTitle:HTMLElement = document.createElement('div');
    albumTitle.classList.add('_bold');
    albumTitle.classList.add('album__title');
    albumTitle.textContent = album.title;

    const userName:HTMLElement = document.createElement('div');
    userName.classList.add('album__title');
    userName.textContent = album.user.name;

    const email:HTMLElement = document.createElement('div');
    email.classList.add('album__title');
    email.textContent = album.user.email;

    item.append(albumPreview);
    item.append(albumTitle);
    item.append(userName);
    item.append(email);
    container.append(item);

    albumPreview.addEventListener('click', handler);
  });

  wrapper.append(container);
}
