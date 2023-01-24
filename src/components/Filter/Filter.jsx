import { useDispatch, useSelector } from 'react-redux';
import { setValueFilter } from 'redux/filterSlice';
import { getValueFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getValueFilter);

  const onChangeValue = e => {
    dispatch(setValueFilter(e.target.value));
  };

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
