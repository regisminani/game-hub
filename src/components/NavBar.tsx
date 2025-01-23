import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <Flex  padding={"10px"}>
      <Image rounded={"xl"} src={logo} boxSize={"60px"} />
      <SearchInput />
      <HStack>
        <ColorModeButton />
        <Text>Darkmode</Text>
      </HStack>
    </Flex>
  );
};

export default NavBar;
