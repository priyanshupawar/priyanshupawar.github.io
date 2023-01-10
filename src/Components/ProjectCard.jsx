import {
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = (props) => {
  const { title, desc, tech, gitLogo, gitLink, liveLink, image } = props;

  return (
    <VStack
      minW="280px"
      gap="10px"
      bg="#f6f6f6"
      borderRadius="20px"
      boxShadow="md"
      p="20px"
    >
      <Image borderRadius="10px" src={image} />
      <Heading p="10px" size="md">
        {title}
      </Heading>
      <Text p="5px 10px" fontSize="sm" textAlign="justify">
        {desc}
      </Text>
      <Heading size="sm">Tech Stack</Heading>
      <Text size="sm" textAlign="center">
        {tech.join(" | ")}
      </Text>
      <Heading size="sm">Take a Look</Heading>
      <HStack w="80%">
        <a target="_blank" href={gitLink}>
          <Image w="30px" src={gitLogo} />
        </a>
        <Spacer />
        <Link target="_blank" href={liveLink}>
          LIVE
        </Link>
      </HStack>
    </VStack>
  );
};

export default ProjectCard;
