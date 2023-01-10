import { Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import m1 from "../Assets/projects/milaap/milaap1.png";
import ik1 from "../Assets/projects/ideakart/ideakart1.png";
// import bnb1 from "../Assets/projects/bnbclone/landing.png";
// import cw1 from "../Assets/projects/clockify/clo1.png";
import gitHub from "../Assets/Tech_Stack/github-icon.svg";
import deployed from "../Assets/world-wide-web.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const sampleProject = [
    // {
    //   title: "Clockify",
    //   desc: "Clockify is a time tracker and timesheet app that lets you track work hours across projects. I worked on this project mainly to understand how to create modern styles and layouts using chakra UI",
    //   tech: ["React", "Redux", "JS", "Chakra UI"],
    //   gitLogo: gitHub,
    //   gitLink: "https://github.com/RupeshSahu969/equable-pleasure-9638",
    //   liveLogo: deployed,
    //   liveLink: "http://clockify-clone-ak6okzwmb-akshay-puranik.vercel.app",
    //   image: cw1,
    // },
    // {
    //   title: "The Cool Club",
    //   desc: "The Cool Club is a website based on Bath & Body Works which is an ecommerce website that specializes in body care products",
    //   tech: ["React", "Redux", "node.js", "Mongo DB", "Express"],
    //   gitLogo: gitHub,
    //   gitLink: "https://github.com/Avdhoot-Kurhe/The-Cool-Club",
    //   liveLogo: deployed,
    //   liveLink: "https://bnbtempdep-akshay-puranik.vercel.app/",
    //   image: bnb1,
    // },
    // {
    //   title: "Milaap",
    //   desc: "Millap is a free crowdfunding for India Raise funds online for medical emergencies and social causes. This was the first full website I built",
    //   tech: ["HTML", "CSS", "JS"],
    //   gitLogo: gitHub,
    //   gitLink: "http://github.com/akshay-puranik/unkempt-meal-6720",
    //   liveLogo: deployed,
    //   liveLink: "https://candid-ganache-399b55.netlify.app/",
    //   image: m1,
    // },
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
