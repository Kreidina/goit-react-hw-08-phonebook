import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box
      zIndex="100"
      position=" fixed"
      top="0"
      left=" 0"
      width="100%"
      height=" 100%"
      backgroundImage=" linear-gradient(
    to top,
    rgba(76, 116, 58, 0.1),
    rgba(109, 132, 58, 0.1)
  )"
    >
      <Spinner
        position="absolute"
        right="48.2%"
        bottom=" 50%"
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        size="xl"
        borderWidth=" 9px"
        color="var(--chakra-colors-teal-500)"
      />
    </Box>
  );
};

export default Loader;
