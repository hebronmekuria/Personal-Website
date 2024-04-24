import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

export function TextCard({header='Welcome  👋 ', content='I am an incoming Software Engineer at Bloomberg On this page, I will share some of my past experiences, projects and interests.'}) {
  return (
    <Box
      w="666px"
      h="315px"
      borderWidth="1px"
      borderRadius='40'
      shadow="md"
      bg="white"
      borderColor='#9A5CCB'
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
      <Text mt='66px' ms='57px' me='53px' fontWeight='semibold' fontSize='20px' color='black' w='556px'>
      Welcome  👋 
      </Text>
      <br/>
      <Text ms='57px' me='53px' fontSize='20px' fontWeight='semibold' color='black' opacity='0.44'  w='556px' mb='54px'>
      I’m an incoming Software Engineer at Bloomberg.
On this page, I will share some of my past experiences, projects and interests. 
      </Text>
    </Box>
  );
}
