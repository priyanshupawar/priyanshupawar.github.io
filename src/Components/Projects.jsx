import { Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ik1 from "../Assets/projects/ideakart/ideakart1.png";
import gitHub from "../Assets/Tech_Stack/github-icon.svg";
import deployed from "../Assets/world-wide-web.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const sampleProject = [
    {
      title: "Ideakart",
      desc: "Ideakart is a site that gives yoy an idea and a platform for the book you want. They offer a huge collection of books in diverse categories",
      tech: ["HTML", "CSS", "JS"],
      gitLogo: gitHub,
      gitLink: "https://github.com/akshay-puranik/Ideakart-Clone",
      liveLogo: deployed,
      liveLink: "https://luminous-nougat-2006e1.netlify.app/",
      image: ik1,
    },
  ];

  return (
    <>
      <VStack id="projects" p="60px 0" gap="40px">
        <Text fontWeight={"bold"} fontSize={{ base: "2xl", md: "4xl" }}>
          Projects
        </Text>
        <Grid
          p={{ base: "20px", md: "60px" }}
          pt="0"
          gap="40px"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {sampleProject.map((el) => (
            <ProjectCard key={el.title} {...el} />
          ))}
        </Grid>
      </VStack>
    </>
  );
};

export default Projects;
