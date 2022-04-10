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

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Display value={good} title="good" />
      <Display value={neutral} title="neutral" />
      <Display value={bad} title="bad" />
    </div>
  )
}

export default App