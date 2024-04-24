import {
  Box,
  ChakraProvider,
  Heading,
  Img,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BasicCard } from "./components/BasicCard";
import { TextCard } from "./components/TextCard";
import { TracingBeam } from "./components/ui/tracing-beam";
import { ProjectCard } from "./components/ProjectCard";
import profile from "./static/profile.png";
import github from "./static/github.png";
import linkedin from './static/linkedin.png';
import email from './static/email.png';
import Image from "next/image";
import { SimpleGrid } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Box alignContent="center">
        <TracingBeam className="px-6">
          <Box w="full" minH="100vh">
            <HStack spacing="24px">
              <VStack spacing="5" minW="350px" me="100px">
                <Heading
                   m='30px'
                  as="h1"
                  color="#9A5CCB"
                  fontWeight="semibold"
                >
                  Hebron Mekuria
                </Heading>
                <Text fontSize="20px" color="#000000" opacity="0.44">
                  {" "}
                  Back-End and Full-Stack Developer
                </Text>
                <Image
                  className="rounded-full mt-20 h-300 w-300"
                  src={profile}
                  alt="Hebron Mekuria"
                />
              </VStack>
              <VStack>
                <TextCard />
                <HStack>
                <Image src={github} width={"70"} height={"70"} alt=""/>
                <Image src={linkedin} width={"70"} height={"70"}  alt="" />
                <Image src={email} width={"70"} height={"70"}  alt="" />
                </HStack>
              </VStack>
            </HStack>

            <HStack className="basic-card-bobbing" w="500px">
              <BasicCard
                title="Professional Experience"
                subtitle="Past internships and jobs."
                buttonUrl="https://example.com"
              />
              <BasicCard
                title="Projects"
                subtitle="Compilation of my coding projects."
                buttonUrl="https://example.com"
              />
              <BasicCard
                title="Skills"
                subtitle="List of my technical and non-technical skills."
                buttonUrl="https://example.com"
              />
              <BasicCard
                title="Education"
                subtitle="My undergraduate degree, activities and courses."
                buttonUrl="https://example.com"
              />
            </HStack>
          </Box>
          <Box w="full" minH="100vh">
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold" m='30px'>
              Projects
            </Heading>
           
            <SimpleGrid columns={2} >
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            </SimpleGrid>
            
          </Box>
          <Box w="full" minH="100vh">
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold" m='30px'>
              Professional Experiences
            </Heading>
          </Box>
          <Box w="full" minH="100vh">
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold"  m='30px'>
              Skills
            </Heading>
          </Box>
        </TracingBeam>
      </Box>
    </ChakraProvider>
  );
}
