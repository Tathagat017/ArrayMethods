let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Pyton",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

let massagedData = allStudentsMarksData.reduce(
  (
    acc,
    {
      name,
      subject1,
      subject2,
      subject3,
      subject4,
      subject5,
      marks1,
      marks2,
      marks3,
      marks4,
      marks5,
    }
  ) => {
    let obj = {};

    obj.name = name;
    obj.subject1 = marks1;

    obj.subject2 = marks2;

    if (subject3) {
      obj.subject3 = marks3;
    }
    if (subject4) {
      obj.subject4 = marks4;
    }
    if (subject5) {
      obj.subject5 = marks5;
    }

    acc.push(obj);
    return acc;
  },
  []
);

console.log(massagedData);

/*
 ------------------------------------------------
 massage the `allStudentsMarksData` to get a new 
 array called `massagedData`

 Instead of separate enties for 5 subjects and their marks,
 in the new array, we just have one entry called marks. 
 marks is an array of objects. the objects of marks
 contains subject and score.
 ------------------------------------------------

  Expected output from `massagedData`

  [
     {
       name: "Prateek", 
       marks: [
         {subject: 'Javascript', score: 90},
         {subject: 'HTML', score: 81},
         {subject: 'CSS', score: 80}
       ]
     },
     {
       name: "Nrupul", 
       marks: [
         {subject: 'Java', score: 95},
         {subject: 'Python', score: 85}
       ]
     },

  ]

*/
