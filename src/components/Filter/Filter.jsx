import { useDispatch } from 'react-redux';
import { addFiler } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => dispatch(addFiler(e.target.value))}
      placeholder="write yours todo text"
    />
  );
};
