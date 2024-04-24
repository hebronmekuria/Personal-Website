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
import Image from "next/image";
import { Vortex } from "./components/ui/vortex";
import { VortexDemo } from "./components/VortexDemo";

export default function Home() {
  return (
    <ChakraProvider>
      <Box alignContent="center">
        <TracingBeam className="px-6">
          <Box w="full" minH="100vh">
            <HStack spacing="24px">
              <VStack spacing="5" minW="350px" me="100px">
                <Heading
                  mt="30px"
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
                <Image src={github} width={"100"} height={"100"} alt="" />
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
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold">
              Projects
            </Heading>

            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </Box>
          <Box w="full" minH="100vh">
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold">
              Professional Experiences
            </Heading>
          </Box>
          <Box w="full" minH="100vh">
            <Heading mt="30px" as="h1" color="#9A5CCB" fontWeight="semibold">
              Skills
            </Heading>
          </Box>
        </TracingBeam>
      </Box>
    </ChakraProvider>
  );
}
