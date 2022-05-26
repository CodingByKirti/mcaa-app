// // map , reduce , filter

const myarr = [1, 2, 3, 4, 5];
const twiceArr = myarr.map((i) => i * 2);

console.log(twiceArr);

const books = [
  {
    id: 1,
    name: "Learn by programming",
    pages: 400,
  },
  {
    id: 2,
    name: "Learn React by Example",
    pages: 500,
  },
  { id: 3, name: "Let us C", pages: 250 },
];

let bookNames = books.map((i) => i.name);
console.log(bookNames);

let bookNamesCaps = books.map((i) => i.name.toUpperCase());
console.log(bookNamesCaps);

let bDetails = books.map((b) => {
  const { pages, ...nameId } = b;
  return {
    ...nameId,
    year: 2021,
    publication: "O'reilly",
  };
});

console.log(bDetails);

// Filter

let fruits = ["apple", "mango", "guava", "grapes", "melon"];
const frts = fruits.filter((f) => f.includes("ap"));
console.log(frts);

const bigBooks = books.filter((b) => b.pages > 250);
console.log(bigBooks);

// reduce  -- it accumulates all the return values
const nums = [12, 34, 56, 767, 77, 44];

const sum = nums.reduce((t, v) => t + v); // Accum_Val,CurVal
console.log(sum);

const totalPages = books.reduce((c, v) => c + v.pages, 0);
// reduce(prevValue,currValue,initialValueofAccummulator)
console.log(totalPages);
