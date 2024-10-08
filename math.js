function tambah(a, b) 
{   
return a + b; 
}  
function kali(a, b) 
{   
return a * b; 
} 
function bagi(a, b)
{
return a / b;
}
function kurang (a, b)
{
return a - b;
}

function tambah(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Error: Invalid input');
    }
    return a + b;
  }
  
  function kali(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Error: Invalid input');
    }
    return a * b;
  }
  
module.exports = { tambah, kali, bagi, kurang };