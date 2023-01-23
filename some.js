const ages = [16, 19, 21, 33, 45, 54, 63, 71];

const adult1 = ages.some(function(age) {
    return age > 18
})

const adult2 = ages.some((age) => { return age > 18})

const adult3 = ages.every((age) => { return age > 18})
// every makes sure EVERY thing is the same
console.log(`adult1:${adult1}`)
console.log(`adult2:${adult2}`)
console.log(`adult3:${adult3}`)
