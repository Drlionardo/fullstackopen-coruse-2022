export const PhoneList = ({persons, filter}) => (
    <div>
        <h2>Numbers</h2>
        {persons.filter(e => e.name.includes(filter)).map(e => <div key={e.id}>{e.name} {e.number}</div>)}
    </div>
)