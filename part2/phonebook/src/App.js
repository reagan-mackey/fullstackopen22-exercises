import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonTable from "./components/PersonTable";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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

      axios
        .post("http://localhost:3001/persons", nameObject)
        .then((response) => {
          setPersons(persons.concat(nameObject));
          setNewName("");
          setNewNumber("");
        });
    } else {
      window.alert(`${newName} is already in the phonebook.`);
    }
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

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add New Entry</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Entries</h2>
      Filter by name:
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <br />
      <br />
      <PersonTable searchName={searchName} persons={persons} />
    </div>
  );
};

export default App;
