import {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [rating, setRating] = useState(new Array(anecdotes.length).fill(0))

    function getAnecdote() {
        return () => setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    function upvote() {
        return () => {
            let newRating = rating.slice()
            newRating[selected]= newRating[selected]+=1
            setRating(newRating)
        }
    }

    return (
        <div>
            <Anecdote text={anecdotes[selected]}/>
            <div>has {rating[selected]} votes</div>

            <button onClick={upvote()}>vote</button>
            <button onClick={getAnecdote()}>next anecdote</button>

        </div>
    )
}
const Anecdote = ({text}) => (
    <div>{text}</div>
)

export default App