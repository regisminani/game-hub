import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.jpg"
import { ColorModeButton } from "./ui/color-mode"
const NavBar = () => {
    return (
<HStack justifyContent={'space-between'} padding={'10px'}>
    <Image rounded={"xl"} src={logo} boxSize={'60px'}/>
    <HStack>
    <ColorModeButton/>
    <Text>Darkmode</Text>

    </HStack>
</HStack>
    )
}

export default NavBar
