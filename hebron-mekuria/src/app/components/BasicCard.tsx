import { Badge, Box, Image, HStack, VStack } from "@chakra-ui/react";

export function BasicCard() {


  return (<>
    <Box borderRadius='2xl' borderWidth='1.5px' opacity='0.27' borderColor='rgb(0,0,0,27)' w='263px' h='328px' ms='10px' alignContent='middle'>
      <VStack>
        <Box  bg='D9D9D9' opacity='0.85' w='215px' h='122px' borderRadius='2xl' borderWidth='1.5px' mt='30px'></Box>
      </VStack>

    </Box>
  </>
  );
}