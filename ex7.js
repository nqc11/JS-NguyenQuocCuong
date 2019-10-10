const numbers = [1, 3, 5, 7, 11];
[num1, ,num2] = numbers;
console.log(num1, num2);

const person = {
    name:'Cuong',
    age: 11
};

const {age} = person;

console.log(age);