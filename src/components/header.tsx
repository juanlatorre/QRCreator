// eslint-disable-next-line
import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export const Header: React.FC = () => {
  return (
    <Box m={12}>
      <Heading as="h1" size="2xl" color="white">
        Generador de QR
      </Heading>
    </Box>
  );
};
