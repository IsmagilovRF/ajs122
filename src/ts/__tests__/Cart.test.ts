import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('добавление элемента Book в корзину', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items.length).toBe(1);
});

test('добавление элемента MusicAlbum в корзину', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items.length).toBe(1);
});


test('добавление элемента Movie в корзину', () => {
  const cart = new Cart();
  cart.add(new Movie(1011, 'The Avengers', 1500, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', '137 мин'));

  expect(cart.items.length).toBe(1);
});


test('подсчет суммарной стоимости Book + MusicAlbum + Movie', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1011, 'The Avengers', 1500, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', '137 мин'));

  expect(cart.totalCost()).toBe(4400);
});

test('подсчет суммарной стоимости с учетом скидки', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.discountCost(10)).toBe(2610);
});

test('удаление элемента из корзины', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.remove(1001);

  expect(cart.items.length).toBe(0);
});