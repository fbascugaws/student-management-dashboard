/**
 * Stores student object data. 
 * The object is composed of first name, last name, and email.
 * Prepopulated with 2 objects.
 */
const mockStudentDb = [
    // {
    //     id: 1700000000000,
    //     firstName: "Gintoki",
    //     lastName: "Sakata",
    //     email: "sakata.gintoki@yorozuya.com"
    // },
    // {
    //     id: 1700000001000,
    //     firstName: "Kagura",
    //     lastName: "Yato",
    //     email: "kagura.yato@yorozuya.com"
    // }
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
    if (!newStudentData.firstName || !newStudentData.lastName 
            || !newStudentData.email) {
        console.error("Name or email is null or undefined.");
        return {};
    }
    if (!isValidEmail(newStudentData.email)) {
        console.error("Email format is invalid.");
        return {};
    }

    const savedStudent = {
        id: Date.now(),
        ...newStudentData // automatically assigns the rest of the fields
    };

    mockStudentDb.push(savedStudent);
    return savedStudent;
}

export const isValidEmail = (email) => {
    // checks for: [text] @ [text] . [text (at least 2 letters)]
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
};