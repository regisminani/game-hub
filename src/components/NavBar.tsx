import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.jpg"
import { ColorModeButton } from "./ui/color-mode"
const NavBar = () => {
    return (
<HStack>
    <Image src={logo} boxSize={'60px'}/>
    <Text>Navbar</Text>
    <ColorModeButton/>
</HStack>
    )
}

export default NavBar
