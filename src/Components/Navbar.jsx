import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";
import resume from "../Assets/Priyanshu-Pawar-Resume.pdf";

const navItem = [
  { path: "home", name: "Home" },
  { path: "about", name: "About Me" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },

  { path: "contact", name: "Contact" },
];

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        pos={"sticky"}
        top="0"
        zIndex={10}
        bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
        // bg="black"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a
            href="/"
            title="Priyanshu Pawar"
            display="flex"
            alignItems="center"
          >
            <Avatar
              size="sm"
              name="Priyanshu Pawar"
              src="https://img.freepik.com/free-vector/gradient-p-logo-template_23-2149372725.jpg?w=2000"
              _hover={{ padding: "1px" }}
            />
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            {navItem.map((item, i) => {
              return (
                <Link
                  as={ReachLink}
                  key={item.path}
                  activeClass={"active"}
                  to={item.path}
                  offset={
                    item.path === "projects"
                      ? -70
                      : item.path === "contact"
                      ? -70
                      : item.path === "activity"
                      ? -70
                      : item.path === "home"
                      ? -200
                      : -90
                  }
                  spy={true}
                  smooth={true}
                  duration={700}
                  fontSize="18"
                  p="5px 20px"
                  borderRadius="5px"
                  _hover={{
                    textDecoration: "none",
                    bg: "white",
                    color: "black",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              display={{ base: "none", md: "flex" }}
              target="_blank"
              href="https://drive.google.com/file/d/1hYCGrkJ7CmsyZJp9QPGQw70K5jrtmovt/view?usp=sharing"
              download="Priyanshu-Pawar-Resume"
            >
              <Button
                _hover={{ textDecoration: "none", bg: "white", color: "black" }}
                variant="solid"
                leftIcon={<AiOutlineDownload />}
                colorScheme="black"
              >
                Resume
              </Button>
            </Link>
          </HStack>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
              // bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link
                    fontSize="xl"
                    fontWeight="500"
                    key={item.path}
                    as={ReachLink}
                    activeClass={"active"}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.path === "skills" ? -180 : -60}
                    duration={700}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                target="_blank"
                href={resume}
                download="Priyanshu-Pawar-Resume"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  variant="solid"
                  leftIcon={<AiOutlineDownload />}
                  colorScheme="messenger"
                >
                  Download Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
}
