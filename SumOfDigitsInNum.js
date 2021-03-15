// for a given number , return the sum of digits
function sumOfDigits(num) {
  if (!num) return 0;

  let sum = 0;
  while (num != 0) {
    sum = sum + Math.floor(num % 10);
    num = num / 10;
  }
  return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(68));
console.log(sumOfDigits(0));
