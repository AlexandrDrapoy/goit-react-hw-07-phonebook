export const Filter = (filter, onChangeValue) => {
  return (
    <>
      <p>Find Contact</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeValue}
      ></input>
    </>
  );
};
