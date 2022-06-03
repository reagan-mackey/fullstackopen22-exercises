const Person = ({ filter, persons, deletePerson }) => {
  if (filter === "") {
    return persons.map((person) => (
      <tr key={person.name}>
        <td key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </td>
      </tr>
    ));
  } else {
    let filteredPeople = persons.filter((person) =>
      JSON.stringify(person.name).toLowerCase().includes(filter.toLowerCase())
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

export default Person;
