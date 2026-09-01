// Task 1: Swap two variables

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b);


// Task 2: Find the maximum number

let numbers = [4, 9, 2, 7, 5];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }

}

console.log(max);


// Task 3: Count vowels

let str = "JavaScript is awesome";

let count = 0;

for (let i = 0; i < str.length; i++) {

    if (
        str[i] == "a" ||
        str[i] == "e" ||
        str[i] == "i" ||
        str[i] == "o" ||
        str[i] == "u"
    ) {
        count++;
    }

}

console.log(count);


// Task 4: Check if a number is prime

function isPrime(num) {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            return false;
        }

    }

    return true;
}

console.log(isPrime(17));


// Task 5: Reverse a string

function reverseString(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {

        reversed = reversed + str[i];

    }

    return reversed;
}

console.log(reverseString("hello"));


// Task 6: Sum only even numbers

let nums = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 == 0) {

        sum = sum + nums[i];

    }

}

console.log(sum);


// Task 7: Remove duplicates

let arr = [1, 2, 3, 2, 4, 1, 5];

let newArray = [];

for (let i = 0; i < arr.length; i++) {

    if (!newArray.includes(arr[i])) {

        newArray.push(arr[i]);

    }

}

console.log(newArray);


// Task 8: FizzBuzz

for (let i = 1; i <= 30; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        console.log("FizzBuzz");

    } else if (i % 3 == 0) {

        console.log("Fizz");

    } else if (i % 5 == 0) {

        console.log("Buzz");

    } else {

        console.log(i);

    }

}


// Task 9: Factorial

function factorial(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {

        result = result * i;

    }

    return result;
}

console.log(factorial(5));


// Task 10: Object and loop

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};

for (let key in car) {

    console.log(key + ": " + car[key]);

}