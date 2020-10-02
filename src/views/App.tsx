// eslint-disable-next-line
import React from "react";
import { Header } from "../components/header";
import {
  Flex,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/core";
import { FaArrowCircleRight } from "react-icons/fa";

export const App: React.FC = () => {
  const [selected, setSelected] = React.useState("text");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      height="100vh"
      bgImg="linear-gradient(to right, #ef32d9, #89fffd)"
    >
      <Header />
      <Stack
        justify="center"
        align="center"
        h="50vh"
        w="50vw"
        bg="white"
        rounded="lg"
        p={6}
      >
        <Text fontSize="2xl">¿Qué quieres meter en el código QR?</Text>
        <Stack direction="row" justify="center" align="center" mt={8}>
          <RadioGroup
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
            spacing={5}
            isInline
          >
            <Radio
              size="lg"
              value="text"
              variantColor="pink"
              border="2px"
              borderRadius="md"
              borderColor="pink.400"
              p={3}
            >
              Texto / URL
            </Radio>
            <Radio
              size="lg"
              value="image"
              variantColor="pink"
              border="2px"
              borderRadius="md"
              borderColor="pink.400"
              p={3}
            >
              Imagen
            </Radio>
            <Radio
              size="lg"
              value="media"
              variantColor="pink"
              border="2px"
              borderRadius="md"
              borderColor="pink.400"
              p={3}
            >
              MP3 / Video
            </Radio>
          </RadioGroup>
        </Stack>
        <IconButton
          mt="1em"
          variant="outline"
          variantColor="dark"
          aria-label="Nexts"
          fontSize="4rem"
          size="lg"
          icon={FaArrowCircleRight}
          border="none"
          _hover={{ bg: "pink" }}
          isRound
        />
      </Stack>
    </Flex>
  );
};
