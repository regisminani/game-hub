import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import React from "react";
import { FcNoIdea } from "react-icons/fc";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  if(!platforms) return null
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    undefined: FcNoIdea, 
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500">
          <div>
          {React.createElement(iconMap[platform.slug]||iconMap['undefined'])}
          </div>
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
