const ages = [16, 19, 21, 33, 45, 54, 63, 71];

const adults = ages.filter((age) => { return age > 21 });

console.log(`ages:`, adults);

(adults.length >= 1) ? console.log(true) : console.log(false);