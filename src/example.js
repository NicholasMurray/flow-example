// @flow
function add(a: number, b: number): number {
  return a + b;
}
type User = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
};

function getFullName(user: User): string {
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