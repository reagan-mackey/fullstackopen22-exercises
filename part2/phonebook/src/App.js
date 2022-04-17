import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "2345" },
    { name: "Reagan M", number: "9877" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    if (
      persons.filter(
        (person) => JSON.stringify(person.name) === JSON.stringify(newName)
      ).length === 0
    ) {
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(nameObject));
    } else {
      window.alert(`${newName} is already in the phonebook.`);
    }

    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const printTable = () => {
    if (searchName === "") {
      return persons.map((person) => (
        <tr key={person.name}>
          <td key={person.name}>
            {person.name} {person.number}
          </td>
        </tr>
      ));
    } else {
      let filteredPeople = persons.filter((person) =>
        JSON.stringify(person.name)
          .toLowerCase()
          .includes(searchName.toLowerCase())
      );

      return filteredPeople.map((person) => (
        <tr key={person.name}>
          <td key={person.name}>
            {person.name} {person.number}
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add New Entry</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Entries</h2>
      Filter by name: <input value={searchName} onChange={handleSearchName} />
      <br />
      <br />
      <table>
        <tbody>{printTable()}</tbody>
      </table>
    </div>
  );
};

export default App;
