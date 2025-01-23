import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
   return (
       <MenuRoot>
         <MenuTrigger>
           <Button variant={"surface"}>
             Order by: Relevance <BsChevronDown />
           </Button>
         </MenuTrigger>
         <MenuContent>
            <MenuItem value="Relevance">Relevance</MenuItem>
            <MenuItem value="Date added">Date added</MenuItem>
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Release date">Release date</MenuItem>
            <MenuItem value="Popularity">Popularity</MenuItem>
            <MenuItem value="Average rating">Average rating</MenuItem>
         </MenuContent>
       </MenuRoot>
     );
}

export default SortSelector
