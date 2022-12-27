const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// const voterCounts = voters.reduce((acc, { age, voted }) => {
//   if (age < 26) {
//     if (acc.numYoungPeople == undefined) {
//       acc.numYoungPeople = 1;
//     } else {
//       acc.numYoungPeople += 1;
//     }
//     acc.numYoungVotes = (acc.numYoungVotes || 0) + (voted ? 1 : 0);
//   } else if (age < 36) {
//     acc.numMidsPeople = (acc.numMidsPeople || 0) + 1;
//     acc.numMidVotesPeople = (acc.numMidVotesPeople || 0) + (voted ? 1 : 0);
//   } else {
//     acc.numOldsPeople = (acc.numOldsPeople || 0) + 1;
//     acc.numOldVotesPeople = (acc.numOldVotesPeople || 0) + (voted ? 1 : 0);
//   }
//   return acc;
// }, {});

// console.log(voterCounts);

const voterCounts = voters.reduce(
  (acc, current) => {
    if (current.age < 26) {
      acc.numYoungPeople += 1;
      if (current.voted) {
        acc.numYoungVotes += 1;
      }
    } else if (current.age < 36) {
      acc.numMidsPeople += 1;
      if (current.voted) {
        acc.numMidVotesPeople += 1;
      }
    } else {
      acc.numOldsPeople += 1;
      if (current.voted) {
        acc.numOldVotesPeople += 1;
      }
    }
    return acc;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(voterCounts); // { numYoungVotes: 1, numYoungPeople: 4, numMidVotesPeople: 3, numMidsPeople: 4, numOldVotesPeople: 3, numOldsPeople: 4 }

/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// const voterCounts = voters.reduce((acc, {name,age, voted}) => {
//   if (age < 26) {
//     acc.numYoungPeople += 1;
//     if (voted) {
//       acc.numYoungVotes += 1;
//     }
//   } else if (age < 36) {
//     acc.numMidsPeople += 1;
//     if (voted) {
//       acc.numMidVotesPeople += 1;
//     }
//   } else {
//     acc.numOldsPeople += 1;
//     if (voted) {
//       acc.numOldVotesPeople += 1;
//     }
//   }
//   return acc;
// }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 });

// console.log(voterCounts); // { numYoungVotes: 1, numYoungPeople: 4, numMidVotesPeople: 3, numMidsPeople: 4, numOldVotesPeople: 3, numOldsPeople: 4 }
