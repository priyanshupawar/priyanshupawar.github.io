import { Grid, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
// import expressJs from "../Assets/Tech_Stack/express.svg";
import bootStrap from "../Assets/Tech_Stack/bootstrap.svg";
import css from "../Assets/Tech_Stack/css-3.svg";
import javaScript from "../Assets/Tech_Stack/javascript.svg";
import html5 from "../Assets/Tech_Stack/html-5.svg";
import gitHub from "../Assets/Tech_Stack/github-icon.svg";
import git from "../Assets/Tech_Stack/git-icon.svg";
// import nodeJs from "../Assets/Tech_Stack/nodejs-icon.svg";
import reactLogo from "../Assets/Tech_Stack/react.svg";
import reduxLogo from "../Assets/Tech_Stack/redux.svg";
import netlify from "../Assets/Tech_Stack/netlify-logo.png";
import React from "react";

const TechStack = () => {
  const techStack = [
    // {
    //   name: "Express",
    //   image: expressJs,
    // },
    // {
    //   name: "Node.js",
    //   image: nodeJs,
    // },
    {
      name: "HTML",
      image: html5,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Javascript",
      image: javaScript,
    },
    {
      name: "React",
      image: reactLogo,
    },
    {
      name: "Redux",
      image: reduxLogo,
    },
    {
      name: "Bootstrap",
      image: bootStrap,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "Github",
      image: gitHub,
    },
    {
      name: "Netlify",
      image: netlify,
    },
  ];

  return (
    <VStack p={{ base: "50px 30px", md: "80px 100px" }} gap="40px" bg="#f6f6f6">
      <Text id="skills" fontWeight={"bold"} fontSize={"4xl"}>
        Tools & Skills
      </Text>
      <Grid
        gap="30px"
        templateColumns={{ base: "repeat(3,1fr)", md: "repeat(5,1fr)" }}
      >
        {techStack.map((el, i) => {
          return (
            <VStack p="20px" key={el.name}>
              <Tooltip label={el.name} placement="bottom">
                <Image
                  h="100%"
                  maxW={i === 0 ? "60%" : "60px"}
                  src={el.image}
                />
              </Tooltip>
            </VStack>
          );
        })}
      </Grid>
    </VStack>
  );
};

export default TechStack;
