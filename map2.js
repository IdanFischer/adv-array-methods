const site = [
    {
        title: "About",
        url: "about.html",
        color: "Red",
        id: "8566743626"
    },
    {
        title: "Portfolio",
        url: "Portfolio.html",
        color: "Blue",
        id: "864938274",
    },
    {
        title: "Contact",
        url: "Contact.html",
        color: "Pink",
        id: "12425356365"
    }
]

// const mapSite = site.map( (element, index) => {
//     console.log(`The title is ${element.title} and index ${index}`)
// })

// site.forEach((element, index) => {
//     const sentence = `${index}: the url is ${element.url} and is the color ${element.color} and it is called ${element.title}`
//     console.log(sentence)
// })

site.forEach((element, index) => {
    const sentence = `${element.url}?pageid=${element.id}`
    console.log(sentence)
})
