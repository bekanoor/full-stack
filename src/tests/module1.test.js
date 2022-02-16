const getPhotos = require('./photos');

const MOCK_PHOTOS = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://blabla/1',
    thumbnailUrl: 'https://blabla/2',
  },
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_PHOTOS),
}));

it('really get photos', async () => {
  const photos = await getPhotos();

  expect(photos).toEqual(MOCK_PHOTOS);
});
