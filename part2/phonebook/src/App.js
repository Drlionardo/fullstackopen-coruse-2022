import {useState} from 'react'
import {Filter} from "./Filter";
import {PhoneList} from "./PhoneList";
import {FillingForm} from "./FillingForm";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} setFilter={setFilter}/>
            <FillingForm persons={persons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/>
            <PhoneList persons={persons} filter={filter} />
        </div>
    )
}

export default App