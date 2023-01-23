const ages = [16, 19, 21, 33, 45, 54, 63, 71];

// Long version
function checkAge(age) {
    return age > 18
}

const ageAdult = ages.find(checkAge)

// console.log(`ageAdult:`, ageAdult)

// Anon Function 
const ageAdult2 = ages.find(function(age) {
    return age > 18
})

// console.log(`ageAdult:`, ageAdult2)

// Arrow Function
const ageAdult3 = ages.find((age => {
    return age > 18
    
}))

// console.log(`ageAdult:`, ageAdult3)

// Arrow Function One Liner
const ageAdult4 = ages.find(age => age > 18)

// console.log(`ageAdult:`, ageAdult4)

// Arrow Function One Liner Slightly Longer
const ageAdult5 = ages.find((age) => {return age > 18} );

console.log(`ageAdult:`, ageAdult5)
