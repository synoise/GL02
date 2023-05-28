// class Mathematics1 {
//     constructor(){
//         console.log('init');
//     }
//     rounding(x) {
//     this.#test();
//     return Math.round(x);

//   }
//   #test(){
//     console.log('test');
//   }
// }

// const kalkulator = new Mathematics1();

// console.log(kalkulator.rounding(2.231523));
// kalkulator.test();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        return `The ${this.name} makes a noise.`;
    }
}

class Dog extends Animal{
    speak(){
        return 'The dog barks.';
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amountToDeposit){
        return this.balance += amountToDeposit;
    }
    withdraw(amountToWithdraw){
        return this.balance -= amountToWithdraw;
    }
    getBalance(){
        return this.balance;
    }
}

class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    getAge(){
        return new Date().getFullYear() - this.year;
    }
}

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMake(){
        return this.make;
    }
    getModel(){
        return this.model;
    }
    getAge(){
        return new Date().getFullYear() - this.year;
    }
}

class Student{
    constructor(name,grades){
        this.name = name;
        this.grades = grades;
    }
    getName(){
        return this.name;
    }
    getAverageGrade(){
        const sum = this.grades.reduce((partialSum, a) => partialSum + a, 0);
        return sum/this.grades.length;
    }
}

class Kontakt{
    constructor(imie,nazwisko,numerTelefonu){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.numerTelefonu = numerTelefonu;
    }
}

class ListaKontaktow{
    constructor(lista){
        this.lista = lista;
    }
    DodajKontakt(kontakt){
        this.lista.push(kontakt);
    }
}


const person = new Person("John", 30);
const rectangle = new Rectangle(5,10);
const animal = new Animal('Cat');
const dog = new Dog();
const account = new BankAccount(100);
const book = new Book('Carrie','Stephan King', 1973);
const circle = new Circle(25);
const car = new Car('Opel','Corsa D',2010);
const student = new Student('Jan Kowalski', [4,4,3,5,3,3,3,4]);
let lista = new ListaKontaktow([]);

let imiename = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
const kontakty = document.getElementById('kontakty');

const dodajKontakt = (imie,nazwisko,telefon) => {
    let nowyKontakt = new Kontakt(imie.value,nazwisko.value,telefon.value);
    lista.DodajKontakt(nowyKontakt);
    for(i=0;i<lista.lista.length;i++){
        let temp = document.createElement('li');
        temp.innerHTML =
            lista.lista[i].imie +
            " " +
            lista.lista[i].nazwisko +
            " " +
            lista.lista[i].numerTelefonu;
          kontakty.appendChild(temp);
        }
}






console.log(lista.lista);
console.log(person.greet());
console.log('Area: ' + rectangle.getArea());
console.log('Permiter: ' + rectangle.getPerimeter());
console.log(animal.speak());
console.log(dog.speak());
console.log('Starting balance: ' + account.getBalance());
account.deposit(25);
console.log('Deposit:');
console.log('Updated balance: ' + account.getBalance());
account.withdraw(75);
console.log('Withdraw: ');
console.log('Updated balance: ' + account.getBalance());
console.log(`
Title: ${book.getTitle()}
Author: ${book.getAuthor()}
Age: ${book.getAge()}
`)
console.log(`
Area: ${circle.getArea()}
Circumference: ${circle.getCircumference()}
`)

console.log(`
Make: ${car.getMake()}
Model: ${car.getModel()}
Age: ${car.getAge()}
`)

console.log(`
Name: ${student.getName()}
Average of grades: ${student.getAverageGrade()}
`)