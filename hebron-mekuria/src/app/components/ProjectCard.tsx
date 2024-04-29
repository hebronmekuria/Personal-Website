import React from "react";
import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectCardProps {
  header: string;
  subtitle: string;
  imageUrl: StaticImageData;
  code: string
}
export function ProjectCard({
  header = 'Professor Gemini',
  subtitle = 'AI Grader that efficiently grades any open-ended assignments, essays, and homework.',
  imageUrl,
  code
}: ProjectCardProps) {
  return (
    <Box
      w="500px"
      h="350px"
      borderWidth="1px"
      overflow='hidden'
      borderRadius="40"
      shadow="md"
      position="relative"  // To position the text over the image
      mt="50px"
      border="gray.500"
      transition="transform 0.2s ease-out, shadow 0.2s ease-out"
      _hover={{
        transform: "scale(1.05)",
        shadow: "2xl",
      }}
    >
      <Image
        src={imageUrl}
        alt={header}
        layout="fill"  // Makes the image fill the container
        objectFit="cover"  // Ensures the image covers the entire Box area
      />
      <VStack mt="200px">
        <HStack>
          <VStack ms="20px" align="left" >
            <Box background='white' zIndex={3} opacity='0.6'>
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="black"
            >
              {header}
            </Text>
            <Text
              fontSize="20px"
              fontWeight="semibold"
              color="black"
            >
              {subtitle}
            </Text>
            </Box>
          </VStack>
          <VStack mt="40px" me="20px">
            <Button
              textColor="white"
              as="a"
              href={code}
              bg="#9A5CCB"
              borderRadius="3xl"
              w="94px"
              h="39px"
              target="_blank" 
            >
              Code
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
