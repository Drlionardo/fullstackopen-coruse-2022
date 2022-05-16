import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    function increaseGood() {
        return () => setGood(good + 1);
    }

    function increaseNeutral() {
        return () => setNeutral(neutral + 1);
    }

    function increaseBad() {
        return () => setBad(bad + 1);
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button name="good" onClick={increaseGood()}/>
            <Button name="neutral" onClick={increaseNeutral()}/>
            <Button name="bad" onClick={increaseBad()}/>

            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}
const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad
    let average = all === 0 ? 0 : (good - bad) / all;
    let positivePercentage = all === 0 ? 0 : good / all * 100

    return (
        <div>
            <StatisticsLine name="good" value={good}/>
            <StatisticsLine name="neutral" value={neutral}/>
            <StatisticsLine name="bad" value={bad}/>
            <StatisticsLine name="all" value={all}/>
            <StatisticsLine name="average" value={average}/>
            <StatisticsLine name="positive" value={positivePercentage + " %"}/>
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