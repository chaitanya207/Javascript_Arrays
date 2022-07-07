// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const parents = [
  { first: 'chaitanya', last: 'bhuvanagiri', year: 1989 },
  { first: 'chiru', last: 'bhuvanagiri', year: 1993 },
  { first: 'chandhrakala', last: 'vanam', year: 1990 },
];

const kids = ['bavitha', 'shubu', 'yodha', 'sathivik', 'lithika'];

//Array.prototype.filter()
// 1. filter the list of parent who are born on 1989

const eightyNine = parents.filter((parent) => {
  if (parent.year <= 1989) {
    return true;
  }
});

// console.log(eightyNine);

//Array.filter.map()
//2. filter the all the parent with fist and last name

const fullName = parents.map((parent) => `${parent.last} ${parent.first}`);

// console.log(fullName);

// Array.prototype.sort()
// 3. sort by the age yongest and oldest people from the parents

const ordered = parents.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

// console.log(ordered);

// Array.prototype.reduce()

const totalYears = parents.reduce((total, parent) => {
  return total + (2022 - parent.year);
}, 0);

// console.log(totalYears);

// Array.prototype.sort()
// find the oldest guy in the parents

const oldest = parents.sort((a, b) => {
  const first = 2022 - a.year;
  const second = 2022 - b.year;

  return first > second ? 1 : -1;
});

// console.log(oldest);

const aplha = kids.sort((a, b) => (a > b ? -1 : 1));

// console.log(aplha)

// find the instance of each item in the array

const numbers = [1, 1, 1, 2, 2, 2, 3, 4, 9090, 9089];

const byGroup = numbers.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

// console.log(byGroup)

const keys = Object.keys(byGroup);
console.log(keys);
const maxValue = Math.max(...Object.values(byGroup));

console.log(maxValue);

const results = keys.filter((x) => byGroup[x] === maxValue);

console.log(results);

// remove duplicates

const uniqValues = numbers.filter(
  (item, index, self) => self.indexOf(item) === index
);

// console.log(uniqValues);
