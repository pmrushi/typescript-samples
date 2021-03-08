interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: (msg:string) => string;
}

var person:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: (msg:string):string => { return msg }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHi("Hi"));