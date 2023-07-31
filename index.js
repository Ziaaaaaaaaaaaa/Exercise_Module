// let {writeFile,readFile,appendFile} = require('fs')

// writeFile('./data.txt', 'cats are my favourite', (err,data)=>{
//     if(!err)
//     console.log(data);
// })


// appendFile('./data.txt', ' dogs almost killed my cats', (err,data)=>{
//     if(!err)
//     console.log(data);
// })

// readFile('./data.txt', 'utf-8', (err,data)=>{
//     if(!err)
//     console.log(data);
// })

const Person = require('./Person');

const person1 = new Person('zia', 'khan', 'zia.khan@example.com');
const person2 = new Person('justin', 'scholtz', 'justin.scholtz@example.com');
const person3 = new Person('jade', 'de wet', 'jade.de wet@example.com');

console.log(person1);
console.log(person2);
console.log(person3);
