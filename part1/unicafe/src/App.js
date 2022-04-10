import { useState } from 'react'

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given yet.</p>
      </>
    ) 
  }
  return (
    <>
    <h1>statistics</h1>
    <ul>
      <li>{"good " + good}</li>
      <li>{"neutral " + neutral}</li>
      <li>{"bad " + bad}</li>
      <li>{"total " + total}</li>
      <li>{"average " + ((total === 0) ? 0 : (good - bad) / total)}</li>
      <li>{"positive " + ((total === 0) ? 0 + "%" : (good / total) * 100 + "%")}</li>
    </ul>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (title) => {
    if (title === "good") {
      setGood(good + 1)
    }
    else if (title === "neutral") {
      setNeutral(neutral + 1)
    }
    else if (title === "bad") {
      setBad(bad + 1)
    }
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick("good")}>good</button>
      <button onClick={() => handleClick("neutral")}>neutral</button>
      <button onClick={() => handleClick("bad")}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App