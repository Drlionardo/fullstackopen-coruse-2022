const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>
            <Header name={course.name}/>
            <Content course={course}/>
            <Total courses={course['parts']}/>
        </div>
    )
}
const Header = ({name}) => (
    <h1>{name}</h1>

)
const Content = ({course}) => (
    <div>
        <Part parts={course['parts'][0]}/>
        <Part parts={course['parts'][1]}/>
        <Part parts={course['parts'][2]}/>
    </div>
)
const Part = ({parts}) => (
    <p>{parts.name} {parts.exercises}</p>
)
const Total = ({courses}) => (
    <p>Number of exercises {courses.length}</p>
)

export default App