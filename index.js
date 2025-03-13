/**
 * PROBLEM
 *
 * Create an array with 5 students name, after that create a function
 * which takes 2 parameters (allStudents & studentName) iterate over
 * all students and find that specific user "studentName"
 */

// Data Structure
const studentsDatabase = ["jhon", "michel", "akash", "eric", "rasel"];

// Algorithm for finding a specific user
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentsDatabase, "akash");
