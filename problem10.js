const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

let massaged = data.reduce((acc, current) => {
  ice = current.favoriteIceCreams.forEach((el) => {
    if (acc[el] == undefined) {
      acc[el] = 1;
    } else {
      acc[el]++;
    }
  });
  return acc;
}, {});

console.log(massaged);

/*
{
	Strawberry: 3,
	Vanilla: 4,
	Chocolate: 5,
	'Cookies & Cream': 2,
	'Mint Chocolate Chip': 3,
	'Rocky Road': 1,
	Pistachio: 1,
	Banana: 1,
	'French Vanilla': 1,
	'Vanilla Bean': 1
}
*/
