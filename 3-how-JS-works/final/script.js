/////////////////////////////////////
// Lecture: Hoisting
// Note that hoisting only works for function declaration
/*
// functions
(1) we can call the function since we have hoisting of function declaration
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

(2) This will cause error since hoisting is not work for function expresssion.
// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables
*** Hoisting scan the all the variable and set to undefined first.
console.log(age); // undefined
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {             // function first can access : a & b
    var b = 'Hi!';
    second();

    function second() {        // function second can access : a & b & c
        var c = 'Hey!';
        third()
    }
}

function third() {             // function thrid can access : a & d
    var d = 'John';
    //console.log(c); 
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);         // john object
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);     // window(global) object
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
