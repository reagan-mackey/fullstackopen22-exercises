const PersonForm = ({
  addPerson,
  newPerson,
  handleNewPerson,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newPerson} onChange={handleNewPerson} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
