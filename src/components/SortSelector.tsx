import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    sortOrder: string;
    onSelectSortOrder: (sortOrder: string) => void
}
const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]
    const currentSortOrder = sortOrders.find(order=>order.value===sortOrder);
   return (
       <MenuRoot>
         <MenuTrigger>
           <Button variant={"surface"}>
           Order by: {currentSortOrder?.label || 'Relevance'} <BsChevronDown />
           </Button>
         </MenuTrigger>
         <MenuContent>
            {sortOrders.map(order=><MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
         </MenuContent>
       </MenuRoot>
     );
}

export default SortSelector
