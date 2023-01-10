import { Avatar, Center, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import profileImg from "../Assets/profile.png";

const About = () => {
  return (
    <>
      <Center
        bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
        p="60px 0"
      >
        <Flex
          id="home"
          w={"80%"}
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center" }}
          p={{ base: "10px", md: "30px" }}
          gap="40px"
          justifyContent="space-around"
          color="white"
        >
          <Center>
            <Avatar w={"250px"} h={"250px"} src={profileImg} />
          </Center>
          <Center>
            <Text fontSize={"3xl"} fontFamily={"sans-serif"}>
              Hi I am Priyanshu Pawar. <br /> I am a Full Stack Web Developer
            </Text>
          </Center>
        </Flex>
      </Center>

      <Center id="about">
        <VStack
          gap="40px"
          w={"100%"}
          p={{ base: "50px 30px", md: "80px 100px" }}
        >
          <Text fontWeight={"bold"} fontSize={"4xl"}>
            About Me
          </Text>
          <Text fontSize={{ base: "1.5rem", md: "2xl" }}>
            Aspiring Frontend Web Developer with hands-on experience in design
            and integration with problem-solving skills. Good knowledge of HTML,
            CSS, JavaScript, and React. Experience in solving 550+ data
            structure problems with 1000+ hours of coding practice and working
            on websites and applications.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;
