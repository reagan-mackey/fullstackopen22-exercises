import { useState } from 'react'

const Display = (props) => {
 return (
  <ul><li>{props.title + " " + props.value}</li></ul>
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
      <h1>statistics</h1>
      <Display value={good} title="good" />
      <Display value={neutral} title="neutral" />
      <Display value={bad} title="bad" />
      <Display value={total} title="total" />
      <Display value={(total === 0) ? 0 : (good - bad) / total} title="average" />
      <Display value={(total === 0) ? 0 + "%" : (good / total) * 100 + "%"} title="positive" />
    </div>
  )
}

export default App