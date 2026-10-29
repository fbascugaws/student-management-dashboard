import { getStudentsAPI, addStudentsAPI } from './api.js';

/**
 * Stores object data from getStudentsAPI()
 */
let localStudent = [];

/**
 * DOM selections for the student form and student table body
 */
const studentForm = document.querySelector('#studentForm');
const studentTableBody = document.querySelector('#studentTableBody');

/**
 * Creates HTML table rows of each student record dynamically.
 * If dataArray has no elements, displays "No student records found."
 * @param {Array} dataArray - List of student objects
 * @returns {void}
 */
const renderTable = (dataArray) => {
    studentTableBody.innerHTML = ''; // clear existing content

    // if no student records exist
    if (!dataArray || dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center;"> 
                    No student records found.
                </td>
            </tr>
        `;
        return;
    }

    // construct table rows from list of student objects
    dataArray.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;
        studentTableBody.appendChild(row);
    })
};

/**
 * Event listener for adding student data
 */
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get user inputted values
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const emailInput = document.querySelector('#email');

    const studentData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim()
    };

    // input fields are missing
    if (!studentData.firstName || !studentData.lastName || 
            !studentData.email) {
        alert('Please fill out all input fields!');
        return;
    }

    addStudentsAPI(studentData); // save record
    localStudent = getStudentsAPI(); // sync with database
    renderTable(localStudent); // refresh table UI
    studentForm.reset(); // reset form to blank
});

/**
 * Initializes localStudents with the invoked function getStudentsAPI()
 * Displays the local initial student value by invoking renderTable()
 *      with localStudent
 */
const initApp = () => {
    localStudent = getStudentsAPI();
    renderTable(localStudent);
};

/**
 * Starts the JavaScript application
 */
initApp();