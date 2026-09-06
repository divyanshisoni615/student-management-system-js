const students = {
    id: 1,
    name: "shanu",
    age: 20,
    course: "javascript",

    marks: {
        html: 88,
        css: 75,
        javascript: 90
    },
    address: {
        city: "jaipur",
        state: "rajasthan"
    }

};

let student = [
    {
        id: 1,
        name: "pari",
        age: 17,
        course: "bca",

        marks: {
            html: 48,
            css: 67,
            javascript: 77
        }
    },
    {
        id: 2,
        name: "riya",
        age: 24,
        course: "mca",

        marks: {
            html: 28,
            css: 17,
            javascript: 27
        }
    }
]
//display all students.
function displayStudents() {
    student.forEach(student => {
        console.log(` 
        ID: ${student.id}
        NAME:${student.name}
        AGE:${student.age}
        COURSE: ${student.course}
        ------------------------- ` );
    });
};
displayStudents();

//Adding new student.
function addStudent(newstudent) {
    student.push(newstudent);
}
addStudent({
    id: 3,
    name: "chanchal",
    age: 34,
    course: "MBA",

    marks: {
        html: 67,
        css: 46,
        javascript: 76
    }
});
displayStudents();

//finding any student.
function findstudent(name) {
    return student.find((Element) => {
        return Element.name === name;
    });
}

console.log(findstudent("chanchal"));

//geting students names.
function getStudentName(name) {
    return student.map((Element) => {
        return Element.name;
    });
}

console.log(getStudentName());

//checking adult or not.
function getAdults(age) {
    return student.filter((Element) => {
        return Element.age > 20;
    });
}
console.log(getAdults());

//calculating total marks.
function calculateTotalMarks(student) {
    const marks = Object.values(student.marks);
    return marks.reduce((total, marks) => {
        return total + marks;
    })
}
console.log(calculateTotalMarks(student[0]));

//calculting avrage marks.
function calculateAverage(student) {
    const marks = Object.values(student.marks);
    const total = marks.reduce((total, marks) => {
        return total + marks;
    }
    )
    return total / marks.length;

}
console.log(calculateAverage(student[0]));

// checking who are passed.
function getPassedStudents() {

    return student.filter((Element) => {
        const marks = Object.values(Element.marks);
        const total = marks.reduce((total, marks) => {
            return total + marks;
        });
        const avg = total / marks.length;
        return avg >= 40;
    }
    );

}
console.log(getPassedStudents());

//searching student by there id.
function searchById(id) {
    return student.find((student) => {
        return student.id === 1;
    })
}
console.log(searchById());

//deleting student by there id.
function deleteStudent(id) {
    student = student.filter(Element => {
        return Element.id !== id;
    })
}
deleteStudent(1);
displayStudents();

//check fail or not.
function hasfailedStudent() {
    return student.some((Element) => {
        const marks = Object.values(Element.marks);
        const total = marks.reduce((total, marks) => {
            return total + marks;
        });
        const avg = total / marks.length;
        return avg >= 40;
    }
    );
}
console.log(hasfailedStudent());

//checking all are adults or not.
function areAllAdults() {
    return student.every((Element) => {
        return Element.age > 20;
    });
}
console.log(areAllAdults());

//checking who is topper.
function getTopper() {
    return student.reduce((topper, Element) => {
        const marks = Object.values(Element.marks);
        const total = marks.reduce((total, marks) => {
            return total + marks;
        });
        const avg = total / marks.length;

        const toppermarks = Object.values(topper.marks);
        const toppertotal = marks.reduce((total, marks) => {
            return total + marks;
        });
        const topperAvg = total / marks.length;

        return avg > topperAvg ? Element : topper;

    }
    );
}
console.log(getTopper());





