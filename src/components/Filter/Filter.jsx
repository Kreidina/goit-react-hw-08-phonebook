import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FormLabel>
      Find contacts by name
      <Input
        _placeholder={{
          color: 'var(--chakra-colors-teal-500)',
        }}
        placeholder="Enter name"
        type="text"
        name="name"
        onChange={e => dispatch(filterChange(e.target.value))}
      />
    </FormLabel>
  );
};

export default Filter;
