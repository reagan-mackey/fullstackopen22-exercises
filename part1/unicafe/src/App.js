import { useState } from "react";

const Button = ({ title, handler }) => {
  return <button onClick={handler}>{title}</button>;
};

const StatisticsTable = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given yet.</p>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{total === 0 ? 0 : (good - bad) / total}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{total === 0 ? 0 + "%" : (good / total) * 100 + "%"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (title) => {
    if (title === "good") {
      setGood(good + 1);
    } else if (title === "neutral") {
      setNeutral(neutral + 1);
    } else if (title === "bad") {
      setBad(bad + 1);
    }
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" handler={() => handleClick("good")} />
      <Button title="neutral" handler={() => handleClick("neutral")} />
      <Button title="bad" handler={() => handleClick("bad")} />
      <StatisticsTable good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
