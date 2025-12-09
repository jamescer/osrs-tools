import "./styles.css";
import { Duradel } from "osrs-tools";

// Function to create and append a list item
function createListItem(label, value) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
  return listItem;
}

// Function to display task details
function displayTaskDetails(task) {
  const container = document.getElementById("duradel");
  container.innerHTML = ""; // Clear existing content

  const title = document.createElement("h1");
  title.textContent = `Task: ${task.name}`;
  container.appendChild(title);

  const list = document.createElement("ul");

  // Add task details
  list.appendChild(createListItem("Alternatives", task.alternatives.join(", ")));
  list.appendChild(createListItem("Amount Range", `${task.amountMin} - ${task.amountMax}`));
  list.appendChild(createListItem("Weight", task.weight));

  // Unlock requirements
  const requirements = task.unlockRequirements.map(req => `${req.type}: Level ${req.level}`).join(", ");
  list.appendChild(createListItem("Unlock Requirements", requirements));

  container.appendChild(list);
}

// Fetch and display a random task
try {
  const task = Duradel.getRandomTask();
  displayTaskDetails(task);
} catch (error) {
  const container = document.getElementById("duradel");
  container.innerHTML = "<p class='error'>Failed to fetch task. Please try again later.</p>";
}
