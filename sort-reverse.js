const pages = [
    "home.html",
    "about.html",
    "portfolio.html",
    "socialmedia.html",
    "contact.html"
]

const pagesCopy = [...pages]

console.log(`Array Original:`, pagesCopy)

const pagesSort = pagesCopy.sort()
const pagesSortReverse = pagesCopy.reverse()

console.log(`Array Sorted:`, pagesSort)
console.log(`Array Original-Post:`, pages)
console.log(`Array Sort-Reverse:`, pagesSortReverse)


