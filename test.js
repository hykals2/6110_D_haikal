const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
  it('seharusnya mengembalikan 5 saat menambahkan 3 + 2', function() {
  expect(tambah(3, 2)).to.equal(5);
});
  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
  expect(kali(2, 3)).to.equal(6);
});
  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
  expect(kurang(2, 2)).to.equal(0);
});
});