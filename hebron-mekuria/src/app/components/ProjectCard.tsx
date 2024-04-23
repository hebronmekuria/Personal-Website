import React from "react";
import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";

export function ProjectCard({
  header = "Gemini Grader ",
  subtitle = "Use AI to grade your essays and other open-ended assignments. ",
  imageUrl = "https://via.placeholder.com/398x344",
  tryit = "",
  code = "",
}) {
  return (
    <Box
      w="398px"
      h="344px"
      borderWidth="1px"
      borderRadius="40"
      shadow="md"
      bgImage={`url(${imageUrl})`}
      bgPosition="center" // Centers the background image
      bgRepeat="no-repeat" // Makes sure the image does not repeat
      bgSize="cover" // Ensures the image covers the entire Box area
      color="#000000"
      mt="50px"
      border="gray.500"
      transition="transform 0.2s ease-out, shadow 0.2s ease-out"
      _hover={{
        transform: "scale(1.05)",
        shadow: "2xl",
      }}
    >
      <VStack mt="200px">
        <HStack>
          <VStack ms="20px" align="left">
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="black" // Adjusted for better visibility
              opacity="0.88" //
            >
              {header}
            </Text>
            <Text
              fontSize="20px"
              fontWeight="semibold"
              color="black" // Adjusted for better visibility
              opacity="0.44"
            >
              {subtitle}
            </Text>
          </VStack>
          <VStack mt="40px" me="20px">
            <Button
              textColor="white"
              as="a"
              href={tryit}
              bg="#9A5CCB"
              borderRadius="3xl"
              w="94px"
              h="39px"
              target="_blank" // Optionally open in new tab
            >
              Try It
            </Button>
            <Button
              textColor="white"
              as="a"
              href={code}
              bg="#9A5CCB"
              borderRadius="3xl"
              w="94px"
              h="39px"
              target="_blank" // Optionally open in new tab
            >
              Code
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
