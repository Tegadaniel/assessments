import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Avatar,
  Select,
  MenuButton,
  Menu,
  Text,
  Popover,
  HStack,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import Notification from "./Notification";

const Header = ({onchange, onsubmit, initValue}) => {
  return (
    <Box as="div" pos="relative" ml="300px" mt="20px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch color="gray.300" />}
        />
        <Input
          width="68%"
          value={initValue}
          onChange={onchange}
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="base"
          type="search"
          placeholder="Find Something..."
        />
        <Button
          pos="relative"
          onClick={onsubmit}
          display="block"
          top="0"
          bottom="0"
          right="80px"
          cursor="pointer"
          color="white"
          backgroundColor="#0B3E9E"
        >
          Search
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button
              background="transparent"
              border="none"
              color="white"
              outline="none"
              display="block"
            >
              <Notification />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Notifications</PopoverHeader>
            <PopoverBody>
              <HStack mt="10px" ml="40px">
                <Avatar size="sm" mt="15px" src="avatar-1.jpg" />
                <Text>Micheal liked you</Text>
              </HStack>
              <Text ml="80px" mb="20px" fontSize="xs">
                About 20mins ago
              </Text>
              <hr />
              <HStack mt="10px" ml="40px">
                <Avatar size="sm" mt="15px" src="avatar-1.jpg" />
                <Text>Jack liked you</Text>
              </HStack>
              <Text ml="80px" mb="20px" fontSize="xs">
                About 40mins ago
              </Text>
              <hr />
              <HStack mt="10px" ml="40px">
                <Avatar size="sm" mt="15px" src="avatar-1.jpg" />
                <Text>Martin commented on your photo</Text>
              </HStack>
              <Text ml="80px" mb="20px" fontSize="xs">
                About 56mins ago
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Avatar size="sm" mt="5px" ml="15px" src="avatar-1.jpg" />
        <Select
          ml="15px"
          width="10%"
          mt="5px"
          variant="unstyled"
          disabled
          placeholder="Abigail"
        />
      </InputGroup>

      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          World
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Following
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Popular
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Post
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Gender
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Location
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          mt="25px"
          backgroundColor="#FAFAFA"
          ml="1px"
          mr="1px"
          borderRadius="3px"
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Profession
        </MenuButton>
      </Menu>
      {/* <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu> */}
    </Box>
  );
};

export default Header;
