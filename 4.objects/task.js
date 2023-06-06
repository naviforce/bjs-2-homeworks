"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student("Василиса", "женский", 20);
new Student("Изабелла", "женский", 30);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
    return this.marks ? this.marks.push(...marks) : "stud expelled"
}

Student.prototype.getAverage = function () {
    return this.marks && this.marks.length ?
        this.marks.reduce   (
            (counter,value) => counter + value, 0
        ) / this.marks.length : 0;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
