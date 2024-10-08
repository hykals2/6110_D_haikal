const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
//Latihan 1//
  //Test case untuk fungsi kurang negative case
  it('seharusnya mengembalikan -2 saat mengurangkan -2 - -3', function() {
    expect(kurang(-5, -3)).to.equal(-2);
  });

  //Test case untuk fungsi bagi 
  it('seharusnya mengembalikan error saat mencoba membagi dengan 0', function() {
      expect(bagi(4, 0)).to.equal(Infinity);
  });

//Latihan 2//
  // Test case untuk fungsi tambah
  it('seharusnya mengembalikan error saat salah satu input adalah string', function() {
    expect(() => tambah(2, "3")).to.throw('Error: Invalid input');
  });
  
  it('seharusnya mengembalikan error saat salah satu input adalah null', function() {
    expect(() => tambah(2, null)).to.throw('Error: Invalid input');
  });

  // Test case untuk fungsi kali
  it('seharusnya mengembalikan error saat salah satu input adalah string', function() {
    expect(() => kali(2, "3")).to.throw('Error: Invalid input');
  });

  it('seharusnya mengembalikan error saat salah satu input adalah null', function() {
    expect(() => kali(2, null)).to.throw('Error: Invalid input');
  });

});