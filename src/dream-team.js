const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameDreamTeam = [];
  if (members == undefined || members == null || members == false) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string' ||
      members[i] === null ||
      members[i] === undefined ||
      typeof members[i] === 'boolean') {
      continue;
    } else {
      members[i] = members[i].replace(/\s+/g, '').toUpperCase();
      nameDreamTeam.push(members[i][0]);
    }
  }

  return nameDreamTeam.sort().join('');
}