// Task-1
// Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// Ans:
console.log(colors["golden rod"]);



// Task-2
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Ans:
car.capacity = 5;
console.log(car);
console.log(car.capacity);




// Task-3
// Display the physics marks as output.

const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log("physics marks: ", students.physics.marks);

// Task-4
// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// Ans:
console.log("counting property: ", Object.keys(student));

4
// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// Output:

for (data in myObject) {
    let values = myObject.city;
    console.log(data, ":", myObject[data], "|", "type: ", typeof(data));
}

/* 
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean 
*/