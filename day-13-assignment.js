
function calculateVAT(price) {
    const vatRate = 7.5;
    if ((typeof (price) === "number") && (Math.sign(price) === 1)) {
        let vat = vatRate * price / 100;
        return vat;
    }
    else {
        return "Invalid"
    }

}

console.log("Total Vat: ", calculateVAT(100));






function validContact(contact) {

    if (typeof (contact) === "string") {
        if (contact.length === 11 && contact.startsWith("01")) {
            let splitedContact = contact.split('');
            for (let singleValue of splitedContact) {
                if (singleValue !== " ") {
                    return true;
                }
            }
        }
    }
    else {
        return "Invalid";
    }
    return false;

}

console.log("valid contact: ", validContact(true));




function willSuccess(marks) {
    let avobe50 = [];
    let less50 = [];
    if (Array.isArray(marks)) {
        for (let singleValue of marks) {
            if (typeof (singleValue) === "number") {
                if (singleValue >= 50) {
                    avobe50.push(singleValue);
                }
                else {
                    less50.push(singleValue);
                }
            }
        }
        if (avobe50.length > less50.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid"
    }
}


console.log("will he get passed: ", willSuccess(true));





function validProposal(person1, person2) {
    if(arguments.length !== 2){
        return "Invalid";
    }
    if ((typeof (person1) === "object" && person1 !== null && Array.isArray(person1) === false) &&
        (typeof (person2) === "object" && person2 !== null && Array.isArray(person2) === false)) {
        if (((typeof (person1.name) === "string") &&
            (typeof (person1.gender) === "string") &&
            (typeof (person1.age) === "number"))
            &&
            (typeof (person2.name) === "string") &&
            (typeof (person2.gender) === "string") &&
            (typeof (person2.age) === "number")) {
            if ((person1.gender !== person2.gender) && (Math.abs(person1.age - person2.age)) <= 7) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid"
    }
}


// let person1 = "Mizan", { name: "mitu", gender: "male", age: 32 };
// let person2 = { name: "mitu", gender: "male", age: 32 }, "Mizan";

console.log("Proposal: ", validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }, { name: "mitu", gender: "male", age: 32 }, "Mizan"));




















