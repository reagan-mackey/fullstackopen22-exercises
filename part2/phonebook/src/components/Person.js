const Person = ({ searchName, persons }) => {
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

export default Person;
