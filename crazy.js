// Alicia's geometry stuff
const {torusVolume, sphereVolume} = require("./volumes")
const chalk = require("chalk")

console.log(chalk.yellow(torusVolume(4,3)))
console.log(chalk.bgMagenta(chalk.black(sphereVolume(1))))
