import Course from './Course'

const CourseList = (props) => {
    const courseComponents = props.courses.map((course, index) => {
        return <Course course={course} key={index}/>
    });

    return (
        <>
            {courseComponents}
            </>
    )
}

export default CourseList;