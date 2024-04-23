import { Box, ChakraProvider, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { InfiniteMovingCardsDemo } from "./components/MovingCardsDemo";
import { BasicCard } from "./components/BasicCard";

export default function Home() {
  return (
    <ChakraProvider>
      <Box>
        <BasicCard/>
      </Box>
    </ChakraProvider>
  );
}
