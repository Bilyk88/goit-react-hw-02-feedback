export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <div>
      <button
        type="button"
        name="good"
        style={{ marginRight: 10 }}
        onClick={onClickGood}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        style={{ marginRight: 10 }}
        onClick={onClickNeutral}
      >
        Neutral
      </button>
      <button type="button" name="bad" onClick={onClickBad}>
        Bad
      </button>
    </div>
  );
};
