import Person from "./Person";

const PersonTable = ({ searchName, persons }) => {
  return (
    <table>
      <tbody>
        <Person searchName={searchName} persons={persons} />
      </tbody>
    </table>
  );
};

export default PersonTable;
