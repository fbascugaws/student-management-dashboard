/**
 * Stores object data. 
 * The object is composed of first name, last name, and email.
 * Prepopulated with minimum 2 objects.
 */
const mockStudentDb = [
  {
    id: 1700000000000,
    firstName: "Gintoki",
    lastName: "Sakata",
    email: "sakata.gintoki@yorozuya.com"
  },
  {
    id: 1700000001000,
    firstName: "Kagura",
    lastName: "Yato",
    email: "kagura.yato@yorozuya.com"
  }
];

/**
 * Simulates a GET request to retrieve all student records.
 * @returns {Array} The current array of students.
 */
export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Simulates a POST request to create and save a new student record.
 * @param {Object} newStudentData - Object containing firstName, lastName, 
 *                                  and email.
 * @returns {Object} The newly created student object including a unique ID.
 */
export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    ...newStudentData
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
