import { useEffect, useState } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(employees);
  return (
    <>
      <ul>
        {employees.map((employee, index) => (
          <li key={employee.id}>
            Employee - {employee.first_name} {employee.last_name}
          </li>
        ))}
      </ul>
    </>
  );
}
