const sports = [
"soccer",           // 0
"snowboarding",     // 1
"tennis",           // 2
"basketball",       // 3
"baseball"          // 4
]
const newSports = [...sports]

// const resultSport = newSports.splice(2)
// const resultSport1 = newSports.splice(2,1)
// newSports.splice(3,2,"Surfing","Blinking")
newSports.splice(3,2,"Surfing","Blinking")


// console.log(`splice(2):`, resultSport)
// console.log(`splice(2,1):`, resultSport1)
// console.log(`splice(3,2):`, newSports)
console.log(`splice(3,2):`, newSports)
