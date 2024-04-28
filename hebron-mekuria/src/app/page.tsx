import {
  Box,
  ChakraProvider,
  Heading,
  Img,
  Divider,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { BasicCard } from "./components/BasicCard";
import { TextCard } from "./components/TextCard";
import { SkillsCard } from "./components/SkillsCard";
import { TracingBeam } from "./components/ui/tracing-beam";
import { ProjectCard } from "./components/ProjectCard";

import Image from "next/image";

import profile from "./static/profile.png";
import github from "./static/github.png";
import linkedin from "./static/linkedin.png";
import email from "./static/email.png";
import python from "./static/languages/python.png";
import java from "./static/languages/java.png";
import c from "./static/languages/c++.png";
import javascript from "./static/languages/Javascript.png";
import typescript from "./static/languages/typescript.png";
import html from "./static/languages/html.png";
import css from "./static/languages/css.png";
import kotlin from "./static/languages/kotlin.png";
import sql from "./static/languages/sql.png";

import bootstrap from "./static/frameworks/bootstrap.svg";
import react from "./static/frameworks/react.png";
import nextjs from "./static/frameworks/nextjs.png";
import springboot from "./static/frameworks/springboot.png";
import flask from "./static/frameworks/flask.png";
import django from "./static/frameworks/django.png";

import android from "./static/technologies/android.svg";
import api from "./static/technologies/api.jpeg";
import azure from "./static/technologies/azure.png";
import git from "./static/technologies/git.png";
import jira from "./static/technologies/jira.svg";
import kysely from "./static/technologies/kysely.jpeg";
import linux from "./static/technologies/linux.png";
import postman from "./static/technologies/postman.svg";
import rest from "./static/technologies/rest.png";

import professional from "./static/professional.png";
import projects from "./static/projects.png";
import skills from "./static/skills.png";
import education from "./static/education.png";
import { TextBlock } from "./components/TextBlock";
import Link from "next/link";

export default function Home() {
  return (
    <ChakraProvider>
      <Box alignContent="center">
        <TracingBeam className="px-6">
          <Box w="full" minH="100vh">
            <HStack spacing="24px">
              <VStack spacing="5" minW="350px" me="100px">
                <Heading m="30px" as="h1" color="#9A5CCB" fontWeight="semibold">
                  Hebron Mekuria
                </Heading>
                <Text fontSize="20px" color="#000000" opacity="0.44">
                  {" "}
                  Back-End and Full-Stack Developer
                </Text>
                <Image
                  className="rounded-full mt-20 w-[300px] h-[300px]"
                  src={profile}
                  alt="Hebron Mekuria"
                />
              </VStack>
              <VStack>
                <TextCard />
                <HStack>
                  <Box
                    as="a"
                    href="https://github.com/hebronmekuria"
                    target="_blank"
                    rel="noopener noreferrer"
                    borderRadius="full"
                    transition="transform 0.2s ease-out, shadow 0.2s ease-out"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "2xl",
                    }}
                  >
                    <Image
                      src={github}
                      width={"70"}
                      height={"70"}
                      alt="GitHub"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.linkedin.com/in/hebron-mekuria"
                    target="_blank"
                    rel="noopener noreferrer"
                    borderRadius="full"
                    transition="transform 0.2s ease-out, shadow 0.2s ease-out"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "2xl",
                    }}
                  >
                    <Image
                      src={linkedin}
                      width={"70"}
                      height={"70"}
                      alt="LinkedIn"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="mailto:hebron.mekuria@emu.edu"
                    borderRadius="full"
                    transition="transform 0.2s ease-out, shadow 0.2s ease-out"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "2xl",
                    }}
                  >
                    <Image src={email} width={"70"} height={"70"} alt="Email" />
                  </Box>
                </HStack>
              </VStack>
            </HStack>

            <HStack className="basic-card-bobbing" w="500px">
              <BasicCard
                title="Professional Experience"
                subtitle="Past internships and jobs."
                buttonUrl="#professional"
                image={professional}
              />
              <BasicCard
                title="Projects"
                subtitle="Compilation of my coding projects."
                buttonUrl="projects"
                image={projects}
              />
              <BasicCard
                title="Skills"
                subtitle="List of my technical and non-technical skills."
                buttonUrl="skills"
                image={skills}
              />
              <BasicCard
                title="Education"
                subtitle="My undergraduate degree, activities and courses."
                buttonUrl="education"
                image={education}
              />
            </HStack>
          </Box>
          <Box w="full" minH="100vh">
            <Heading
              mt="30px"
              as="h1"
              color="#9A5CCB"
              fontWeight="semibold"
              m="30px"
              id="projects"
            >
              Projects
            </Heading>

            <SimpleGrid columns={2} spacingX={200}>
              <ProjectCard></ProjectCard>
              <ProjectCard header="oyster" subtitle="Colorstack open-source software"></ProjectCard>
              <ProjectCard header="Internet Hospital"
              subtitle='A virtual doctor at your fingertips!'></ProjectCard>
              <ProjectCard header="Pantry Puzzle" subtitle="Let's reduce food waste using AI!"></ProjectCard>
              <ProjectCard header="Major to Career Converter" subtitle="Find out what job you can land with any given college major!"></ProjectCard>
              <ProjectCard header="Social Distancing Alarm" subtitle="Stay six-feet apart with this small alarm!"></ProjectCard>
            </SimpleGrid>
          </Box>
          <Box w="full" minH="100vh">
            <Heading
              mt="30px"
              as="h1"
              color="#9A5CCB"
              fontWeight="semibold"
              m="30px"
              id="'professional"
            >
              Professional Experiences
            </Heading>
            <TextBlock />
            <TextBlock />
            <TextBlock />
            <TextBlock />
          </Box>
          <Box w="full" minH="100vh">
            <Heading
              mt="30px"
              as="h1"
              color="#9A5CCB"
              fontWeight="semibold"
              m="30px"
              id="skills"
            >
              Skills
            </Heading>

            <Heading
              as="h4"
              m="30px"
              color="#9A5CCB"
              fontWeight="medium"
              fontStyle="italic"
              opacity={0.7}
            >
              Programming Languages
            </Heading>
            <SimpleGrid columns={3} spacingX={150}>
              <SkillsCard icon={python} label="Python" />
              <SkillsCard icon={typescript} label="Typescript" />
              <SkillsCard icon={java} label="Java" />
              <SkillsCard icon={javascript} label="Javascript" />
              <SkillsCard icon={kotlin} label="Kotlin" />
              <SkillsCard icon={c} label="C++" />
              <SkillsCard icon={html} label="HTML" />
              <SkillsCard icon={css} label="CSS" />
              <SkillsCard icon={sql} label="SQL" />
            </SimpleGrid>
            <Heading
              as="h4"
              m="30px"
              color="#9A5CCB"
              fontWeight="medium"
              fontStyle="italic"
              opacity={0.7}
              mt="50px"
            >
              Frameworks
            </Heading>
            <SimpleGrid columns={3} spacingX={150}>
              <SkillsCard icon={flask} label="Flask" />
              <SkillsCard icon={django} label="Django" />
              <SkillsCard icon={springboot} label="Springboot" />
              <SkillsCard icon={react} label="React" />
              <SkillsCard icon={nextjs} label="NextJS" />
              <SkillsCard icon={bootstrap} label="Bootstrap" />
            </SimpleGrid>
            <Heading
              as="h4"
              m="30px"
              color="#9A5CCB"
              fontWeight="medium"
              fontStyle="italic"
              opacity={0.7}
              mt="50px"
            >
              Other Tools and Technologies
            </Heading>
            <SimpleGrid columns={3} spacingX={150}>
              <SkillsCard icon={android} label="Android Studio" />
              <SkillsCard icon={api} label="API Design" />
              <SkillsCard icon={azure} label="Microsoft Azure" />
              <SkillsCard icon={git} label="Git" />
              <SkillsCard icon={jira} label="Jira" />
              <SkillsCard icon={kysely} label="Kysely SQL Builder" />
              <SkillsCard icon={linux} label="Linux" />
              <SkillsCard icon={postman} label="Postman" />
              <SkillsCard icon={rest} label="RESTful Services" />
            </SimpleGrid>
          </Box>
          <Box w="full" minH="100vh">
            <Heading
              mt="30px"
              as="h1"
              color="#9A5CCB"
              fontWeight="semibold"
              m="30px"
              id="education"
            >
              Education
            </Heading>
          </Box>
        </TracingBeam>
      </Box>
    </ChakraProvider>
  );
}
