const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;

/*
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
      const Total = ({ sum }) => <p>Number of exercises {sum}</p>
*/
