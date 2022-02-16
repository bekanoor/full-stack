const getAlbums = require('./albums');

const MOCK_ALBUMS = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_ALBUMS),
}));

it('really get albums', async () => {
  const albums = await getAlbums();

  expect(albums).toEqual(MOCK_ALBUMS);
});
