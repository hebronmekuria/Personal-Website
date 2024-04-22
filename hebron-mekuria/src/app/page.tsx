import { Box, ChakraProvider, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { CanvasRevealEffectDemo } from "./components/CanvasRevealDemo";
import { BentoGridDemo } from "./components/BentoDemo";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";


export default function Home() {
  return (
    <ChakraProvider>
      <Box m="30px">
        <VStack> 
        <Heading>Welcome to my Website!</Heading>
        <InfiniteMovingCards/>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
