export const Course = ({course}) => (
    <div>
        <Header name={course.name}/>
        <Content course={course}/>
        <Total course={course['parts']}/>
    </div>
)
const Header = ({name}) => (
    <h2>{name}</h2>
)
const Content = ({course}) => (
    <div>
        {course['parts'].map(e => <Part key={e.id} parts={e}/>)}
    </div>
)
const Part = ({parts}) => (
    <p>{parts.name} {parts.exercises}</p>
)
const Total = ({course}) => {
    console.log(course)
    return (
        <p>Number of exercises {course.reduce((sum, e) => sum + e.exercises, 0)}</p>
    )
}