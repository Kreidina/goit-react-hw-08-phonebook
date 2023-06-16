import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FormLabel m="20px 0" textAlign="center">
      Find contacts by name
      <Input
        placeholder="Enter name"
        type="text"
        name="name"
        onChange={e => dispatch(filterChange(e.target.value))}
      />
    </FormLabel>
  );
};

export default Filter;
