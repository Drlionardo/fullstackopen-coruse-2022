import person from "../services/PersonService";
import {useState} from "react";

export const FillingForm = ({persons, setPersons, setStatus}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handeNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handeNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addRecord = (event) => {
        event.preventDefault()
        if (newName.length > 0 && newNumber.length > 0) {
            if (!persons.some(e => e.name === newName) || window.confirm(`${newName} is already added to phonebook. Do you want to replace number?`)) {
                const newPerson = createNewPerson();
                setPersons(() => (persons.concat(newPerson)))
                    person.create(newPerson)
            }
            setStatus(`${newName} was added`)
            setNewName('')
            setNewNumber('')
        }

        function createNewPerson() {
            return {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            };
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