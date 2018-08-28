const age = 99;

if (age >= 21) {
  console.log('Please come in');
} else {
  console.log('Beat it youngin!');
}

const a = 1;
const b = '1';

// === checks type and value
// a === b; // false
// a == b; // true

// a !== b; // true
// a != b; // false

const favColor = 'green';
const favAnimal = 'cat';

// Logical Operators
// https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-1-foundations/chapters/js-strings.md#logical-operators
if (favAnimal === 'cat' && favColor === 'green') {
  console.log('Welcome to the club');
} else if (favAnimal === 'dog' || favColor === 'blue') {
  console.log('Give me yo money to join!');
} else {
  console.log('Go Away Fool');
}

const h1div = document.getElementById('myh1');
console.log(h1div);

const pie = 'peach';
console.log('Pie Length:', pie.length);
console.log('#3', pie.charAt(2));
console.log('IndexOf:', pie.indexOf('ch'));
console.log('IndexOf:', pie.indexOf('cat')); // -1 Not found

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "isn't");
console.log('Replace:', newQuote);
