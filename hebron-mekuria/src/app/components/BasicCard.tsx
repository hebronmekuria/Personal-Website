import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

export function BasicCard() {
  return (
    <Box
      w="263px"
      h="328px"
      borderWidth="1px"
      borderRadius='40'
      shadow="md"
      bg="white"
      ms='29px'
      color='#000000'
      mt='50px'
      border='gray.500'
      transition="transform 0.2s ease-out, shadow 0.2s ease-out" // Add smooth transition for transform and shadow
      _hover={{
        transform: "scale(1.05)", // Scales up the Box by 5% on hover
        shadow: "2xl" // Enhances the shadow to make it more prominent
      }}
    >
      <VStack align='center'>
        <Box
          mt='30px'
          borderWidth="1px"
          borderRadius='40'
          border='white'
          overflow="hidden"
          bg="#D9D9D9"
          opacity='0.85'
          w="215px"
          h="122px"
          shadow='lg'
          mb='12px'
          ms='24px'
          me='24px'
        ></Box>
      
        <Text fontSize="20px" fontWeight="medium" h='28px' mb='20px' ms='33px' me='10px'>
          Professional Experiences
        </Text>
        <Text fontSize="20px" color="gray.500" opacity='0.44px' h='22px' mb='4px' ms='33px' me='3px' fontWeight='medium'>
          Past internships and jobs.
        </Text>
        <Button colorScheme="purple" borderRadius='3xl' w='94px' h='39px' ms='141px' me='28px' mb='51px'>
          View
        </Button>
      </VStack>
    </Box>
  );
}
