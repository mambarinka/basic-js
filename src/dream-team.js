const CustomError = require("../extensions/custom-error");

// module.exports = function createDreamTeam(members) {
function createDreamTeam(members) {
  let nameDreamTeam = [];
  if (members == undefined || members == null || members == false) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string' || members[i] === null || members[i] === undefined) {
      return false;
    } else {
      members[i] = members[i].replace(/\s+/g, '').toUpperCase();
      nameDreamTeam.push(members[i][0]);
    }
  }
  console.log(typeof nameDreamTeam);
  console.log(nameDreamTeam.sort().join(''));
  console.log(typeof nameDreamTeam);
  return nameDreamTeam.sort().join('');
}

createDreamTeam([
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1, 2, 3, 4, 5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
])
