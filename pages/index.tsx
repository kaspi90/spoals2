import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ButtonGroup, Input } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className={styles.container}>
      <Head>
        <title>spoals</title>
        <meta name="description" content="Create your own sport goals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading size="md">spoals</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">About</Button>
          <Button colorScheme="teal">Contact</Button>
        </ButtonGroup>
      </Flex>

      <Flex alignItems="center" justify={"center"}>
        <Box w="sm">
          <Stack spacing={3}>
            <Heading size="sm">Login</Heading>
            <Input placeholder="E-Mail" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <ButtonGroup gap="2">
              <Button colorScheme="teal">Sign Up</Button>
              <Button colorScheme="teal">Log in</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
