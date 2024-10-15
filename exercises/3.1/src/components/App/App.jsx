import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const StatisticLine = (props) => {
    return <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
  }

  const Statistics = () => {
    if (good + neutral + bad === 0) return <div>No feedback given</div>;

    return (
      <div>
        <table>
            <tbody>
                <StatisticLine text="good" value={good}></StatisticLine>
                <StatisticLine text="neutral" value={neutral}></StatisticLine>
                <StatisticLine text="bad" value={bad}></StatisticLine>
                <StatisticLine text="all" value={good + neutral + bad}></StatisticLine>
                <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)}></StatisticLine>
                <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100 + " %"}></StatisticLine>
            </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics></Statistics>
    </div>
  );
};

export default App;
