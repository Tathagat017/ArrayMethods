let data = [
  { name: "John", subject: "Javascript" },
  { name: "John", subject: "HTML" },
  { name: "John", subject: "CSS" },
  { name: "Pete", subject: "Java" },
  { name: "Pete", subject: "English" },
  { name: "Pete", subject: "Maths" },
  { name: "Mary", subject: "Rust" },
  { name: "Mary", subject: "Elm" },
];

let subjectHash = data.reduce((acc, item) => {
  if (acc[item.name] == undefined) {
    acc[item.name] = [item.subject];
  } else {
    acc[item.name].push(item.subject);
  }
  return acc;
}, {});

console.log(subjectHash);

// let subjectHash = data.reduce((acc, item) => {
//   if (!acc[item.name]) {
//     acc[item.name] = [];
//   }
//   acc[item.name].push(item.subject);
//   return acc;
// }, {});

// console.log(subjectHash);
/*
Expected output:
{
  John: ["Javascript", "HTML", "CSS"],
  Pete: ["Java", "English", "Maths"],
  Mary: ["Rust", "Elm"]
}
*/

/*
 - Use proper array methods to create an object from the data arrray.
 - from the data, the name would become the key of the new object.
 - keys must be unique, one key per user.
 - the value would be an array of their subjects.
*/
