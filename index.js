console.log("I'm ready!");
// Iteration 1: Names and Input//

const hacker1 = "Maria"
console.log (`The driver's name is ${hacker1}`)

const hacker2 = "Jesusito"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`"The driver has the longest name, it has ${hacker1.length} characters."`)
} else if (hacker1.length < hacker2.length) {
    console.log (`"It seems that the navigator has the longest name, it has ${hacker1.length} characters."`)
} else if (hacker1.length = hacker2.length) {
    console.log (`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
}

// Iteration 3: Loops

let hacker0 = ""
for (let i = 0; i < hacker1.length; i++) {
  hacker0 += (hacker1[i].toUpperCase()+" ")
}

console.log(hacker0)

let hacker3 = ""
for (let i = hacker1.length -1; i >= 0; i--) {
  hacker3 += hacker1[i]
}

console.log (hacker3)