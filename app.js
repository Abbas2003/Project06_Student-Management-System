#! /usr/bin/env node
// Student management system
import promptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = promptSync();
console.log(chalk.bold.blueBright("\t\tStudent Management System"));
console.log("\t\t-------------------------");
class Student {
    constructor(name) {
        this.id = Student.idNumber++;
        this.name = name;
        this.courses = [];
        this.balance = 110000;
    }
    ;
    enrollCourse(course) {
        this.courses.push(course);
    }
    ;
    viewBalance() {
        return this.balance;
    }
    ;
    payTuitionFees(amount) {
        this.balance -= amount;
        console.log(`Paid: ${amount} Rs`);
    }
    ;
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
        console.log(`Balance: ${this.balance} Rs`);
    }
    ;
}
Student.idNumber = 10000;
;
console.log("\n");
// Function to take user input
// Getting the number of students to add
const numStudents = parseInt(prompt("How many students you want to add? "));
// Adding students and perform actions
for (let i = 0; i < numStudents; i++) {
    const stuName = prompt(`Enter name of student ${i + 1}: `);
    const student = new Student(stuName);
    const numCourses = parseInt(prompt("In how many courses you want to enroll? "));
    for (let j = 0; j < numCourses; j++) {
        const courseName = prompt(`Enter course name ${j + 1}: `);
        student.enrollCourse(courseName);
    }
    ;
    const tuitionAmount = parseFloat(prompt(`Enter tuition fees to be paid for ${stuName}: `));
    student.payTuitionFees(tuitionAmount);
    student.showStatus();
}
;
console.log("\n");
// const student1 = new Student(prompt("Enter your name: "));
// student1.enrollCourse(prompt("Enter Subject 1: "));
// student1.enrollCourse(prompt("Enter Subject 2: "));
// student1.enrollCourse(prompt("Enter Subject 3: "));
// student1.enrollCourse(prompt("Enter Subject 4: "));
// student1.showStatus();
// student1.payTuitionFees(8000);
// console.log("\n");
// const student2 = new Student(prompt("Enter your name: "));
// student2.enrollCourse("Science");
// student2.enrollCourse("Physics");
// student2.enrollCourse("German");
// student2.enrollCourse("ICT");
// student2.showStatus();
// student2.payTuitionFees(10000);
