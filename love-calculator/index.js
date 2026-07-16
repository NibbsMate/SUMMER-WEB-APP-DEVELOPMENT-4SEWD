import generateLoveScore, { getLoveMessage } from "./utils.js";
import chalk from "chalk";

// Two people's names
const person1 = "a";
const person2 = "aamod";

// Generate a random love score
const loveScore = generateLoveScore();

// Get the message based on the score
const message = getLoveMessage(loveScore);

// Display the result with colors
console.log(chalk.blue(`${person1} ❤️ ${person2}`));
console.log(chalk.yellow(`Love Score: ${loveScore}%`));
console.log(chalk.green(message));
