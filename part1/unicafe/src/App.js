import { useState } from "react";

const Button = (props) => {
  const { word, onClick } = props;
  return <button onClick={onClick}>{word}</button>;
};

const StatisticsLine = (props) => {
  const { text, number } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = (props) => {
  const { good, bad, neutral, total } = props;
  if (total > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <h2>Good {good}</h2>
        <h2>Neutral {neutral}</h2>
        <h2>Bad {bad}</h2>

        <StatisticsLine text={"Good"} number={good / total} />

        <StatisticsLine text={"Neutral"} number={neutral / total} />

        <StatisticsLine text={"Bad"} number={bad / total} />
        <StatisticsLine text={"All"} number={total} />
        <StatisticsLine text={"Average"} number={(good - bad) / total} />
        <StatisticsLine text={"Positive"} number={good / total} />
      </>
    );
  }

  return (
    <>
      <div>
        <span>No feedback given</span>
      </div>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setAll] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    setAll(total + 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setAll(total + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setAll(total + 1);
  };

  return (
    <div>
      <Button word={"good"} onClick={increaseGood} />
      <Button word={"neutral"} onClick={increaseNeutral} />
      <Button word={"bad"} onClick={increaseBad} />
      <Statistics good={good} bad={bad} total={total} neutral={neutral} />
    </div>
  );
};

export default App;
