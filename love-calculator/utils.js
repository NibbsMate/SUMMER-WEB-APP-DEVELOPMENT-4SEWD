// Generates a random love score between 1 and 100
function generateLoveScore() {
  return Math.floor(Math.random() * 100) + 1;
}

// Export as the default export
export default generateLoveScore;

// Returns a message based on the score
export function getLoveMessage(score) {
  if (score >= 1 && score <= 30) {
    return "Not a great match 😢";
  } else if (score >= 31 && score <= 70) {
    return "Could work 🙂";
  } else {
    return "Perfect match ❤️";
  }
}
