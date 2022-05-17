export const FillingForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const handeNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handeNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addRecord = (event) => {
        event.preventDefault()
        if (newName.length > 0 && newNumber.length > 0) {
            if (!persons.some(e => e.name === newName)) {
                const newPerson = {
                    name: newName,
                    number: newNumber,
                    id: persons.length + 1
                }
                setPersons(() => (persons.concat(newPerson)))
                setNewName('')
                setNewNumber('')
            } else {
                alert(`${newName} is already added to phonebook`)
            }
        }
    }
    return (
        <div>
            <h1>add a new</h1>
            <form onSubmit={addRecord}>
                <div>
                    <div>name: <input value={newName} onChange={handeNameChange}/></div>
                    <div>number: <input value={newNumber} onChange={handeNumberChange}/></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}