export const Filter = ({filter, setFilter}) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div>
            <form>
                filter shown with: <input value={filter} onChange={handleFilterChange}/>
            </form>
        </div>
    )
}