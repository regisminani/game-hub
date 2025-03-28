import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <Flex  padding={"10px"} alignItems={'center'}>
      <Image rounded={"xl"} src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <HStack>
        <ColorModeButton />
      </HStack>
    </Flex>
  );
};

export default NavBar;
