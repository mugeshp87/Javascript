const details = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
  ],
};
console.log(details);
console.log(details.homeTown);
console.log(details['members'][0]['powers'][2])
let string=JSON.stringify(details);
console.log(string)
console.log(string[53])
let obj=JSON.parse(string);
console.log(obj)
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.getOwnPropertyDescriptors(obj));