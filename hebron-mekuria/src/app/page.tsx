
import { ChakraProvider, Text } from '@chakra-ui/react'
import { CanvasRevealEffectDemo } from './components/CanvasRevealDemo';


export default function Home() {
  return (
    <ChakraProvider>
      <Text> Hello World!!</Text>
      <CanvasRevealEffectDemo/>
    </ChakraProvider>
  );
}
