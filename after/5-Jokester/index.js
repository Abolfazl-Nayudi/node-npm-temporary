const joke = require("give-me-a-joke");

joke.getRandomDadJoke((joke) => {
  console.log("here is your joke: ", joke);
});
