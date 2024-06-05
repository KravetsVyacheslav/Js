const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users));
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = (users) => {
  return users
    .flatMap((user) => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
