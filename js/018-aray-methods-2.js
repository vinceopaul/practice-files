/*
 * Map to names
 * Write the code that converts it into an array of names.
 */
function mapNames() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];

  let names = users.map((user) => user.name);
  // let names = Array.from(users, (user) => user["name"]);
  return names;
}

// console.log(mapNames());

/*
 * Map to objects
 * Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
 */

function mapToObjects() {
  let john2 = { name: "John", surname: "Smith", id: 1 };
  let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
  let mary2 = { name: "Mary", surname: "Key", id: 3 };

  return [john2, pete2, mary2].map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  }));
}

// console.log(mapToObjects()[0]?.id, mapToObjects()[0]?.fullName); // 1 John Smith
// console.log(mapToObjects()[6]?.fullName ?? "JPete Hunt (F)"); // JPete Hunt

/*
 * Sort users by age
 * Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
 */

function sortUsersByAge() {
  const sortByAge = (arr) => {
    return arr.sort((a, b) => a.age - b.age);
  };

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  const arr = [pete, john, mary];

  sortByAge(arr);

  return arr;
}
const usersS = sortUsersByAge();

// now: [john, mary, pete]
// for (let user of usersS) {
//   console.log(user.name);
// }

/*
 * Get average age
 * Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

* The formula for the average is (age1 + age2 + ... + ageN) / N.
 */
function getAvg() {
  // "Memory Bank" approach - Can be scaled to filter, min max
  // const getAverageAge = (arr) => {
  //   const stats = arr.reduce(
  //     (acc, user) => {
  //       acc.sum += user.age; // Operator 1: Addition
  //       acc.count += 1; // Operator 2: Increment
  //       return acc; // Hand-off the object
  //     },
  //     { sum: 0, count: 0 }
  //   );
  //   return stats.sum / stats.count;
  // };

  // Inside div operator
  // const getAverageAge = (arr) =>
  //   arr.reduce((total, user, index, array) => {
  //     return total + user.age / array.length;
  //   }, 0);

  const getAverageAge = (arr) =>
    arr.reduce((total, user) => total + user.age, 0) / arr.length;

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];

  return getAverageAge(arr);
}

// console.log(getAvg()); // (25 + 30 + 29) / 3 = 28

/*
 * Create keyed object from array
 * Let’s say we received an array of users in the form {id:..., name:..., age:... }.

* Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 */

function group() {
  /*  Creates shallow copy ...acc (Slower O(n^2))
 -> Copy 1st data to A
 -> Copy 1st, and then Copy new 2nd data to B
 -> Copy 1st & 2nd, and Copy new3rd data to C
 -> Object C : 3 obj data created; Object A & B thrown away
*/
  // const groupById = (usersObj) => {
  //   return usersObj.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
  // };

  const groupById = (usersObj) => {
    return usersObj.reduce((acc, user) => {
      const key = user.id;

      acc[key] = user;

      return acc;
    }, {});
  };

  let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  return groupById(users);
}

console.log(group());

/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
