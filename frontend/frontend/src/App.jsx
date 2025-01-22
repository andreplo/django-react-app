import { useState, useEffect } from "react";
import EmployeeList from "./pages/employees/EmployeeList";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);

  const url = "http://localhost:8000";
  console.log("url: ", url);

  useEffect(() => {
    fetch(`${url}/api/`)
      .then((res) => res.json())
      .then((data) => {
        // alert(data);
        setCurrentTime(data.time);
        setCurrentDate(data.date);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is my first containerized react app using Vite! Reload? Nope!
        </h1>
        <p>
          The date is {currentDate} and the time is {currentTime}.
        </p>{" "}
        <br />
      </header>
      <body>
        <EmployeeList />
      </body>
    </div>
  );
}

export default App;
