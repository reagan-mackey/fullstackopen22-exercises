import Person from "./Person";

const PersonTable = ({ filter, persons, deletePerson }) => {
  return (
    <table>
      <tbody>
        <Person filter={filter} persons={persons} deletePerson={deletePerson} />
      </tbody>
    </table>
  );
};

export default PersonTable;
