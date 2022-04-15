import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (
      persons.filter(
        (person) => JSON.stringify(person.name) === JSON.stringify(newName)
      ).length === 0
    ) {
      const nameObject = {
        name: newName,
      };
      setPersons(persons.concat(nameObject));
    } else {
      window.alert(`${newName} is already in the phonebook.`);
    }

    setNewName("");
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map((person) => (
            <tr key={person.name}>
              <td key={person.name}>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
