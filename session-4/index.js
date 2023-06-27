
let personA = {
    name: "Nadine",
    age: 34,
    location: "London",
    likes: "trains in kickboxing"
}; 

let personB = {
    name: "Kalid",
    age: 29,
    location: "London",
    likes: "biology"
}; 

let personC = {
    name: "Jessie",
    age: 45,
    location: "Coventry",
    likes: "drawing"
}; 



const biography = (person) => "Hi my name is, " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes + "."

console.log(biography(personC));
console.log(biography(personA));
console.log(biography(personB));