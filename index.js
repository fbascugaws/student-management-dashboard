import { getStudentsAPI, addStudentsAPI } from './api.js';

console.log("=== EXERCISE 1 TEST CASES ===");

// Display the initial populated database.
console.log("Test Case 1");
console.log("Initial DB State:", getStudentsAPI());

// Create a new student: first name, last name, and email. 
// Display the newly added student.
console.log("\nTest Case 2");
const addedStudent = addStudentsAPI({
  firstName: "Shinpachi",
  lastName: "Shimura",
  email: "shinpachi.shimura@dojo.com"
});
console.log("Return Saved Object:", addedStudent);

// Display the updated database.
console.log("\nTest Case 3");
console.log("Updated DB State:", getStudentsAPI());

// console.log("\n=== EXERCISE 2 TEST CASES ===");
// console.log("Test Case 1");
// console.log("\nTest Case 2");
// console.log("\nTest Case 3");
// console.log("\nTest Case 4");