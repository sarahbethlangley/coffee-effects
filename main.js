const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

const darkCoffee = `dark madagascar blend` || `hawaiian dark roast` || `jamaican dark blue`
const lightCoffee = `light colombian roast` || `salvador robusto light`
const mediumCoffee = `guatemalan blend medium roast` || `jamaican medium roast`

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${lightCoffee} and drink it black` 
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${mediumCoffee} and add cream only` 
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${darkCoffee} and add cream and sugar` 
    }
    output += "\n"
}

console.log(output)