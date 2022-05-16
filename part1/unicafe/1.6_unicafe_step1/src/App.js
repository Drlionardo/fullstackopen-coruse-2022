import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h2>give feedback</h2>
            <Button name="good" onClick={() => setGood(good + 1)}/>
            <Button name="neutral" onClick={() => setNeutral(neutral + 1)}/>
            <Button name="bad" onClick={() => setBad(bad + 1)}/>

            <h2>statistics</h2>
            <StatisticsLine name="good" value={good}/>
            <StatisticsLine name="neutral" value={neutral}/>
            <StatisticsLine name="bad" value={bad}/>
        </div>
    )
}
const Button = ({name, onClick}) => (
    <button onClick={onClick}>{name}</button>
)
const StatisticsLine = ({name, value}) => (
    <div>{name} {value}</div>
)
export default App