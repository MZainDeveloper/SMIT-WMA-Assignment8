// 1. Find maximum between two numbers
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");
if (num1 > num2) {
  console.log("Maximum:", num1);
} else if (num2 > num1) {
  console.log("Maximum:", num2);
} else {
  console.log("Both numbers are equal");
}

// 2. Find maximum between three numbers
const n1 = prompt("Enter the first number:");
const n2 = prompt("Enter the second number:");
const n3 = prompt("Enter the third number:");
if (n1 >= n2 && n1 >= n3) {
  console.log("Maximum:", n1);
} else if (n2 >= n1 && n2 >= n3) {
  console.log("Maximum:", n2);
} else {
  console.log("Maximum:", n3);
}

// 3. Check whether a number is negative, positive, or zero
const number = prompt("Enter a number:");
if (number > 0) {
  console.log("The number is Positive");
} else if (number < 0) {
  console.log("The number is Negative");
} else {
  console.log("The number is Zero");
}

// 4. Check whether a number is divisible by 5 and 11
const checkNum = prompt("Enter a number:");
if (checkNum % 5 === 0 && checkNum % 11 === 0) {
  console.log("The number is divisible by both 5 and 11");
} else {
  console.log("The number is not divisible by both 5 and 11");
}

// 5. Check whether a number is even or odd
const evenOddNum = prompt("Enter a number:");
if (evenOddNum % 2 === 0) {
  console.log("The number is Even");
} else {
  console.log("The number is Odd");
}

// 6. Check whether a year is a leap year
const year = prompt("Enter a year:");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("The year is a Leap Year");
} else {
  console.log("The year is not a Leap Year");
}

// 7. Check whether a character is an alphabet
const character = prompt("Enter a character:");
if (
  (character >= "a" && character <= "z") ||
  (character >= "A" && character <= "Z")
) {
  console.log("The character is an Alphabet");
} else {
  console.log("The character is not an Alphabet");
}

// 8. Check whether an alphabet is a vowel or consonant
const alpha = prompt("Enter an alphabet:");
if ("aeiouAEIOU".includes(alpha)) {
  console.log("The alphabet is a Vowel");
} else {
  console.log("The alphabet is a Consonant");
}

// 9. Check whether a character is alphabet, digit, or special character
const char = prompt("Enter a character:");
if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log("The character is an Alphabet");
} else if (char >= "0" && char <= "9") {
  console.log("The character is a Digit");
} else {
  console.log("The character is a Special Character");
}

// 10. Check whether a character is uppercase or lowercase
const letter = prompt("Enter a letter:");
if (letter >= "A" && letter <= "Z") {
  console.log("The letter is Uppercase");
} else if (letter >= "a" && letter <= "z") {
  console.log("The letter is Lowercase");
} else {
  console.log("Invalid Input");
}

// 11. Input week number and print week day
const weekNumber = prompt("Enter a week number (1-7):");
if (weekNumber === "1") {
  console.log("Monday");
} else if (weekNumber === "2") {
  console.log("Tuesday");
} else if (weekNumber === "3") {
  console.log("Wednesday");
} else if (weekNumber === "4") {
  console.log("Thursday");
} else if (weekNumber === "5") {
  console.log("Friday");
} else if (weekNumber === "6") {
  console.log("Saturday");
} else if (weekNumber === "7") {
  console.log("Sunday");
} else {
  console.log("Invalid week number");
}

// 12. Input month number and print number of days in that month
const monthNumber = prompt("Enter a month number (1-12):");
if (["1", "3", "5", "7", "8", "10", "12"].includes(monthNumber)) {
  console.log("31 days");
} else if (["4", "6", "9", "11"].includes(monthNumber)) {
  console.log("30 days");
} else if (monthNumber === "2") {
  console.log("28 or 29 days");
} else {
  console.log("Invalid month number");
}

// 13. Count total number of notes in given amount
const amount = prompt("Enter the amount:");
const notes500 = Math.floor(amount / 500);
const remaining500 = amount % 500;
const notes100 = Math.floor(remaining500 / 100);
const remaining100 = remaining500 % 100;
console.log(`500: ${notes500}, 100: ${notes100}`);

// 14. Input angles of a triangle and check whether triangle is valid or not
const angle1 = parseFloat(prompt("Enter the first angle:"));
const angle2 = parseFloat(prompt("Enter the second angle:"));
const angle3 = parseFloat(prompt("Enter the third angle:"));
if (angle1 + angle2 + angle3 === 180) {
  console.log("The triangle is valid");
} else {
  console.log("The triangle is not valid");
}

// 15. Input all sides of a triangle and check whether triangle is valid or not
const side1 = parseFloat(prompt("Enter the first side:"));
const side2 = parseFloat(prompt("Enter the second side:"));
const side3 = parseFloat(prompt("Enter the third side:"));
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("The triangle is valid");
} else {
  console.log("The triangle is not valid");
}

// 16. Check whether the triangle is equilateral, isosceles, or scalene
const s1 = parseFloat(prompt("Enter the first side:"));
const s2 = parseFloat(prompt("Enter the second side:"));
const s3 = parseFloat(prompt("Enter the third side:"));
if (s1 === s2 && s2 === s3) {
  console.log("The triangle is Equilateral");
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  console.log("The triangle is Isosceles");
} else {
  console.log("The triangle is Scalene");
}

// 17. Find all roots of a quadratic equation
const a = parseFloat(prompt("Enter the coefficient a:"));
const b = parseFloat(prompt("Enter the coefficient b:"));
const c = parseFloat(prompt("Enter the coefficient c:"));
const discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("Roots are real and different:", root1, root2);
} else if (discriminant === 0) {
  const root = -b / (2 * a);
  console.log("Roots are real and equal:", root);
} else {
  console.log("Roots are imaginary");
}

// 18. Calculate profit or loss
const costPrice = parseFloat(prompt("Enter the cost price:"));
const sellingPrice = parseFloat(prompt("Enter the selling price:"));
if (sellingPrice > costPrice) {
  console.log("Profit:", sellingPrice - costPrice);
} else if (costPrice > sellingPrice) {
  console.log("Loss:", costPrice - sellingPrice);
} else {
  console.log("No profit, no loss");
}

// 19. Calculate percentage and grade
const physics = parseFloat(prompt("Enter marks in Physics:"));
const chemistry = parseFloat(prompt("Enter marks in Chemistry:"));
const biology = parseFloat(prompt("Enter marks in Biology:"));
const mathematics = parseFloat(prompt("Enter marks in Mathematics:"));
const computer = parseFloat(prompt("Enter marks in Computer:"));
const totalMarks = physics + chemistry + biology + mathematics + computer;
const percentage = (totalMarks / 500) * 100;
if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else if (percentage >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

// 20. Calculate Gross Salary
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
let hra, da;
if (basicSalary <= 10000) {
  hra = 0.2 * basicSalary;
  da = 0.8 * basicSalary;
} else if (basicSalary <= 20000) {
  hra = 0.25 * basicSalary;
  da = 0.9 * basicSalary;
} else {
  hra = 0.3 * basicSalary;
  da = 0.95 * basicSalary;
}
console.log("Gross Salary:", basicSalary + hra + da);

// 21. Calculate electricity bill
const units = parseFloat(prompt("Enter electricity units consumed:"));
let bill;
if (units <= 50) {
  bill = units * 0.5;
} else if (units <= 150) {
  bill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
  bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else {
  bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
}
bill += 0.2 * bill; // Add surcharge
console.log("Total Electricity Bill:", bill.toFixed(2));
