import "./styles.css";
import { Duradel } from "osrs-tools";

const task = Duradel.getRandomTask();

export default function App() {
  if (!task) {
    return (
      <div className="App">
        <h1>Slayer Master: {Duradel.name}</h1>
        <p>No task available.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Slayer Master: {Duradel.name}</h1>
      <h2>Task Details</h2>
      <p>
        <strong>Name:</strong> {task.name}
      </p>
      <p>
        <strong>Amount:</strong> {task.amountMin} - {task.amountMax}
      </p>
      <p>
        <strong>Weight:</strong> {task.weight}
      </p>
      <p>
        <strong>Alternatives:</strong>{" "}
        {task.alternatives && task.alternatives.length > 0
          ? task.alternatives.join(", ")
          : "None"}
      </p>
      <p>
        <strong>Unlock Requirements:</strong>
      </p>
      <ul>
        {task.requirements?.map((req, index) => (
          <li key={index}>{req.description}</li>
        )) || <li>None</li>}
      </ul>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
