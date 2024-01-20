export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <div>
      <button type="button" style={{ marginRight: 10 }} onClick={onClickGood}>
        Good
      </button>
      <button
        type="button"
        style={{ marginRight: 10 }}
        onClick={onClickNeutral}
      >
        Neutral
      </button>
      <button type="button" onClick={onClickBad}>
        Bad
      </button>
    </div>
  );
};
