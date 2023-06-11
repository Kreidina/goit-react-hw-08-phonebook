import { FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  return (
    <FormLabel>
      Find contacts by name
      <Input placeholder="Enter name" type="text" name="name" />
    </FormLabel>
  );
};

export default Filter;
