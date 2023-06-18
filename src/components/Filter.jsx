import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FormLabel m="20px 0" textAlign="center" fontSize="20px">
      Find contact
      <Input
        placeholder="Enter name"
        type="text"
        name="name"
        onChange={e => dispatch(filterChange(e.target.value))}
        autoComplete="off"
        m="10px 0"
      />
    </FormLabel>
  );
};

export default Filter;
