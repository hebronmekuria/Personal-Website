import {
  Box,
  ChakraProvider,
  Heading,
  Image,
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
import { Vortex } from "./components/ui/vortex";
import { VortexDemo } from "./components/VortexDemo";
import { SimpleGrid } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      
      <Box alignContent='center'>
        <TracingBeam className="px-6">
          <Box w="full" minH="100vh">
            <HStack spacing="24px">
              <VStack spacing="5" minW="350px" me='100px'>
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
                <Img
                  borderRadius="full"
                  mt="20px"
                  boxSize="300px"
                  src=''
                  alt="Hebron Mekuria"
                />
              </VStack>
              <VStack>
              <TextCard/>
              <Image
              src='Personal-Website/hebron-mekuria/src/app/static/github.png'
              alt=''/>
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
