import {StatisticsLine} from "./StatisticsLine";

export const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad
    let average = all === 0 ? 0 : (good - bad) / all;
    let positivePercentage = all === 0 ? 0 : good / all * 100

    if (all === 0) {
        return (
            <div>No feedback given</div>
        )
    } else {
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
}
