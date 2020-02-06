function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i !== list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) return 0;
  return list[0] + sumRecursion(list.splice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}
const testList = [0, 1, 2, 3, 4];
console.log(sumTheSimpleWay(testList));
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
