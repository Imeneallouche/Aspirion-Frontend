import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"White"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="fantasy" color="black">
          Aspirion
        </Text>
      </Box>

      <Box
        bg={"white"}
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      ></Box>
    </Container>
  );
};

export default HomePage;
