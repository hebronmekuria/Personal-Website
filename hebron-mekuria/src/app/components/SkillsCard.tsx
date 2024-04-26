import React from "react";
import { Box, Text, Button, VStack, Heading } from "@chakra-ui/react";

import Image, { StaticImageData } from "next/image";

import profile from "../static/profile.png";
import github from "../static/github.png";
import linkedin from "../static/linkedin.png";
import email from "../static/email.png";
import python from "../static/languages/python.png";
import java from "../static/languages/java.png";
import c from "../static/languages/c++.png";
import javascript from "../static/languages/Javascript.png";
import typescript from "../static/languages/typescript.png";
import html from "../static/languages/html.png";
import css from "../static/languages/css.png";

interface SkillsCardProps {
  icon: StaticImageData;
  label: string;
}
export function SkillsCard( { icon, label }: SkillsCardProps) {
  return (
    <Box
      w="300px"
      h="300px"
      borderWidth="1px"
      borderRadius="40"
      shadow="md"
      bg="white"
      borderColor="#9A5CCB"
      ms="29px"
      color="#000000"
      mt="50px"
      border="gray.500"
      transition="transform 0.2s ease-out, shadow 0.2s ease-out" // Add smooth transition for transform and shadow
      _hover={{
        transform: "scale(1.05)", // Scales up the Box by 5% on hover
        shadow: "2xl", // Enhances the shadow to make it more prominent
      }}
    >
      <VStack  spacing={10}>
        <Box mt='20px'>
        <Image
          src={icon}
          alt="Hebron Mekuria"
          width={150}
          height={150}
          layout="fixed"
        />
        </Box>
        <Text fontSize='20px' top='30px' w='220px' alignSelf='center'>{label}</Text>
      </VStack>
    </Box>
  );
}
