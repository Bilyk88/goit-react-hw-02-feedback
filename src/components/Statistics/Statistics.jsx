export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {/* {this.countPositiveFeedbackPercentage() >= 0 && (
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          )} */}
      <p>
        Positive feedback: {positivePercentage >= 0 && positivePercentage + '%'}
      </p>
    </div>
  );
};
