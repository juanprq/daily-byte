const Trie = require('./index');

describe('Trie', () => {

  test('it should have insert method', () => {
    expect(new Trie().insert).toBeInstanceOf(Function);
  });

  test('it should have the find method', () => {
    expect(new Trie().search).toBeInstanceOf(Function);
  });

  test('it should insert and find a word', () => {
    const trie = new Trie();

    trie.insert('programming');

    expect(trie.search('computer')).toBe(false);
    expect(trie.search('programming')).toBe(true);
  });

});
