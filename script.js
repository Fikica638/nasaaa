// Fun Facts Array
const facts = [
    "Did you know? Venus is the hottest planet in our solar system.",
    "Did you know? A day on Venus is longer than a year on Venus.",
    "Did you know? There are more trees on Earth than stars in the Milky Way galaxy.",
    "Did you know? Space is completely silent because sound needs a medium to travel.",
    "Did you know? One teaspoon of a neutron star's matter weighs about 6 billion tons."
  ];
  
  // Select elements
  const factDisplay = document.getElementById("fact-display");
  const changeFactButton = document.getElementById("change-fact");
  
  // Change fact on button click
  changeFactButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
  });
  