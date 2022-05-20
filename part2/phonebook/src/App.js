import {useEffect, useState} from 'react'
import {Filter} from "./components/Filter";
import {FillingForm} from "./components/FillingForm";
import {PersonList} from "./components/PersonList";
import personService from "./services/PersonService";
import {StatusMessage} from "./components/StatusMessage";

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')
    const [statusMessage, setStatusMessage] = useState(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        personService.getAll()
            .then(personsFromDb => setPersons(personsFromDb))
    },[])
    const setStatus = (message) => {
        setIsError(false)
        setStatusMessage(message)
    }
    const setError = (message) => {
        setIsError(true)
        setStatusMessage(message)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <StatusMessage message={statusMessage} isError={isError} setMessage={setStatusMessage}/>
            <Filter filter={filter} setFilter={setFilter}/>
            <FillingForm setStatus={setStatus} setPersons={setPersons} persons={persons}/>
            <PersonList setPersons={setPersons} persons={persons} setStatus={setStatus} setError={setError} filter={filter} />
        </div>
    )
}

export default App