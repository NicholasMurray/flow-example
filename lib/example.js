// 
function add(a, b) {
  return a + b;
}

function getFullName(user) {
  const {
    name: {
      first,
      middle,
      last
    }
  } = user;
  return [first, middle, last].filter(Boolean).join("");
}
const result = add(1, 2);
const fullname = getFullName({
  name: {
    first: "Joe",
    middle: "Bud",
    last: "Matthews"
  }
});

console.log(result);
console.log(fullname);

getFullName({
  name: {
    first: "Joe",
    middle: "Bud",
    last: "Matthews"
  }
});