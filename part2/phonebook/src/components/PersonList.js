import PersonService from "../services/PersonService";
import '../style/Note.css'

export const PersonList = ({persons, setPersons, filter, setError, setStatus}) => {
    function removePerson(person) {
        if (window.confirm(`Do you want to delete ${person.name} `)) {
            PersonService.remove(person.id).then(() => {
                setPersons(persons.filter(e => e.id !== person.id))
                setStatus(`${person.name} deleted`)
            }).catch(() => {
                setError(`${person.name} was already deleted}`)
            })
        }
    }

    return (
        <div>
            <h2>Numbers</h2>
            {persons.filter(e => e.name.includes(filter)).map(e =>
                <li className='note' key={e.id}>
                    {e.name} {e.number}
                    <button onClick={() => removePerson(e)}>delete< /button>
                </li>
            )}
        </div>
    )
}


