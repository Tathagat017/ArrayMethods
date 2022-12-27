let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// [16, 20, 23, 30]

let newArr = users.reduce((acc, { age }) => {
  acc.push(age);

  return acc;
}, []);

// let newArr = users.map((item) => {
//   return item.age * 2;
// });

console.log(newArr); // [16,20,23,30]

/*
Problem Statement: 

Use proper array method such that the newArr becomes: 
 [16,20,23,30]
 
The newArr is simply an array of numbers, in this problem the ages of the users. 
*/
