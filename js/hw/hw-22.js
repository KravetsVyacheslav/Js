const users = [
    { name: 'Sharlene', age: 30, eyeColor: 'blue', gender: 'male', isActive: true, email: 'sharlene@example.com' },
    { name: 'Elma', age: 25, eyeColor: 'brown', gender: 'female', isActive: false, email: 'elma@example.com' },
  ];
  
  const getUserNames = users => users.map(user => user.name);
  console.log(getUserNames(users));
  
  const getUsersByEyeColor = (users, eyeColor) =>
    users.filter(user => user.eyeColor === eyeColor);
  console.log(getUsersByEyeColor(users, 'blue'));
  
  const getUsersByGender = (users, gender) =>
    users.filter(user => user.gender === gender).map(user => user.name);
  console.log(getUsersByGender(users, 'male'));
  
  const getInactiveUsers = users => users.filter(user => !user.isActive);
  console.log(getInactiveUsers(users));
  
  const getUserByEmail = (users, email) =>
    users.find(user => user.email === email);
  console.log(getUserByEmail(users, 'jane@example.com'));
  
  const getUsersByAgeRange = (users, minAge, maxAge) =>
    users.filter(user => user.age >= minAge && user.age <= maxAge);
  console.log(getUsersByAgeRange(users, 20, 30));