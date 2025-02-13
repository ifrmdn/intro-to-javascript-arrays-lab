// Exercise 1,2
const foods = ['pizza','cheeseBurger'];
console.log(foods);

// Exercise 3
const firstElement = foods.unshift('taco');
// Exercise 5
foods.splice(2, 0, 'tofu');
// Exercise 6
foods.splice(1, 1, 'sushi', 'cupcake');
console.log(foods);
// Exercise8
console.log(foods.indexOf('tofu', 'soyIdx'));
// Exercise 9
console.log(foods.join(' -> ', 'allFood'));
// Exercise 10
console.log(foods.includes('soup', 'hasSoup'));
// Exercise 7
console.log(foods.slice(1, 3));

// Exercise 4
foods[1]='favFood';
console.log(foods);

// Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter(num => num % 2 !== 0);
console.log('Exercise 11 result:', odds);

// Exercise 12
const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
    if (num % 3 === 0) {
        fizz.push(num);
    }
    if (num % 5 === 0) {
        buzz.push(num);
    }
});

console.log(fizz);
console.log(buzz);
console.log(fizzbuzz);

// Exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
console.log(numArrays ,'numsList');
// Exercise 14
const num = numArrays[2][1];
console.log(num);
// Exercise 15
let total = 0;
nums.forEach(num => {
    total += num;
});
console.log('the total for numArrays is' , total);


