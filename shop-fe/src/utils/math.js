// math.js

// Tính trung bình
export function average(numbers) {
  if (!numbers.length) return 0;
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

// Tính giai thừa
export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
