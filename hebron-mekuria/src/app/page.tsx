"use client";
import {
  Box,
  ChakraProvider,
  Heading,
  Img,
  Divider,
  Text,
  ListItem,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import React, { useRef } from "react";

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

import gemini from "./static/projects/gemini.png";
import food from "./static/projects/food.jpeg";
import internet from "./static/projects/internethos.png";
import colorstack from "./static/projects/colorstack.png";

import professional from "./static/professional.png";
import projects from "./static/projects.png";
import skills from "./static/skills.png";
import education from "./static/education.png";
import { TextBlock } from "./components/TextBlock";
import Link from "next/link";

export default function Home() {
  const professionalRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const colorstackexp = [
    <ListItem key="1">
      Building a feature for 7000+ Colorstack students to share compensation
      data to increase transparency and measure success.
    </ListItem>,
    <ListItem key="2">
      Using TypeScript, PostgreSQL, and Kysely in the backend and React & Remix
      in the frontend.
    </ListItem>,
  ];

  const vistashareexp = [
    <ListItem key="1">
      Built a full-stack web feature for 300+ company clients to onboard more
      efficiently using Django, PostgreSQL and Bootstrap.
    </ListItem>,
    <ListItem key="2">
      Collaborated on a scrum-based agile development environment to
      periodically seek feedback and iterate.
    </ListItem>,
  ];

  const morganstanexp = [
    <ListItem key="1">
      Designed and built 4 REST APIs from scratch using Java Spring Boot,
      Postman, JDBC, JUnit Testing, and a SQL Server database.
    </ListItem>,
    <ListItem key="2">
      Independently defined and documented the APIs’ specific requirements,
      features, and architecture.
    </ListItem>,
    <ListItem key="3">
      Increased a trading application’s efficacy by 40%, implementing a
      performance analysis dashboard in Angular and TypeScript.
    </ListItem>,
  ];

  const tutorexp = [
    <ListItem key="1">
      Strengthened the academic confidence of minority engineering students by
      leading weekly study sessions for 30 weeks.
    </ListItem>,
    <ListItem key="2">
      Gave small-group instruction in core concepts such as Electrostatics,
      Electromagnetism, and Thermodynamics.
    </ListItem>,
  ];
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
                title="Projects"
                subtitle="Compilation of my coding projects."
                buttonUrl="projects"
                image={projects}
                onClick={() => scrollToRef(projectRef)}
              />
              <BasicCard
                title="Professional Experience"
                subtitle="Past internships and jobs."
                buttonUrl="#professional"
                image={professional}
                onClick={() => scrollToRef(professionalRef)}
              />
              <BasicCard
                title="Skills"
                subtitle="List of my technical and non-technical skills."
                buttonUrl="skills"
                image={skills}
                onClick={() => scrollToRef(skillsRef)}
              />
              <BasicCard
                title="Education"
                subtitle="My undergraduate degree, activities and courses."
                buttonUrl="education"
                image={education}
                onClick={() => scrollToRef(professionalRef)}
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
              ref={projectRef}
            >
              Projects
            </Heading>

            <SimpleGrid columns={2} spacingX={200}>
              <ProjectCard
                imageUrl={gemini}
                header="Gemini"
                subtitle="Use AI to grade any open-ended assignment with ease."
                code="https://github.com/hebronmekuria/GeminiHackathon"
              ></ProjectCard>
              <ProjectCard
                imageUrl={colorstack}
                header="oyster"
                subtitle="Colorstack open-source software"
                code="https://github.com/hebronmekuria/oyster"
              ></ProjectCard>
              <ProjectCard
                imageUrl={internet}
                header="Internet Hospital"
                subtitle="A virtual doctor at your fingertips!"
                code="https://github.com/TasnubaSukanna/BlackWingsHacks/blob/main/NewVSCode.zip"
              ></ProjectCard>
              <ProjectCard
                imageUrl={food}
                header="Pantry Puzzle"
                subtitle="Let's reduce food waste using AI!"
                code="https://github.com/andreaalopez/HackMIT2023"
              ></ProjectCard>
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
              ref={professionalRef}
            >
              Professional Experiences
            </Heading>
            <TextBlock
              company="Colorstack"
              role="Open-Source Contributor"
              date="Mar 2023 - Present"
              location="remote"
              description={colorstackexp}
            />
            <TextBlock
              company="Vistashare"
              role="Software Engineer Intern"
              date="Aug 2023 - Dec 2023"
              location="Harrisonburg, VA"
              description={vistashareexp}
            />
            <TextBlock description={morganstanexp} />
            <TextBlock
              company="Eastern Mennonite University"
              role="Physics and Engineering Tutor"
              date="Aug 2022 - May 2023"
              description={tutorexp}
            />
          </Box>
          <Box w="full" minH="100vh">
            <Heading
              mt="30px"
              as="h1"
              color="#9A5CCB"
              fontWeight="semibold"
              m="30px"
              id="skills"
              ref={skillsRef}
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
          {/* <Box w="full" minH="100vh">
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
          </Box> */}
        </TracingBeam>
      </Box>
    </ChakraProvider>
  );
}
