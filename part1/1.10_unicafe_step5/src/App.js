import {useState} from 'react'
import {Button} from "./Button";
import {Statistics} from "./Statistics";

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

export default App