import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonTable from "./components/PersonTable";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPeople) => {
      setPersons(initialPeople);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (
      persons.filter(
        (person) => JSON.stringify(person.name) === JSON.stringify(newPerson)
      ).length === 0
    ) {
      const personObject = {
        name: newPerson,
        number: newNumber,
      };

      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson("");
        setNewNumber("");
      });
    } else {
      const ok = window.confirm(
        `${newPerson} is already in the phonebook, replace the old number with the new one?`
      );
      if (ok) {
        const toUpdate = persons.find((person) => person.name === newPerson);
        updateNumber(toUpdate.id);
      }
    }
  };

  const deletePerson = (id) => {
    const toDelete = persons.find((person) => person.id === id);
    const ok = window.confirm(`Delete ${toDelete.name}?`);
    if (ok) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
      setNewPerson("");
      setNewNumber("");
    }
  };

  const updateNumber = (id) => {
    const person = persons.find((person) => person.id === id);
    const changedPerson = { ...person, number: newNumber };

    personService.update(id, changedPerson).then((returnedPerson) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : returnedPerson))
      );
    });
  };

  const handleNewPerson = (event) => {
    setNewPerson(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add New Entry</h2>
      <PersonForm
        addPerson={addPerson}
        newPerson={newPerson}
        handleNewPerson={handleNewPerson}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Entries</h2>
      Filter by name:
      <Filter filter={filter} handleFilter={handleFilter} />
      <br />
      <br />
      <PersonTable
        filter={filter}
        persons={persons}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
