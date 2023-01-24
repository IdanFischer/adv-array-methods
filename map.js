//  const numbers = [11,22,33,44,55,66,77]
const people = [
    {firstName: "Idan", lastName: "Fischer"},
    {firstName: "Gisselle", lastName: "Pombar"},
    {firstName: "Anthony", lastName: "Cool"}
]

//  const numberMap = numbers.map( (element) => {
//     console.log(element);
//  }) 

const peopleMap = people.map( (element, index) => {
    const eachPerson = `person ${index+1} ${element.firstName} ${element.lastName}`
    console.log(eachPerson)
    return element
})

console.table(peopleMap)


