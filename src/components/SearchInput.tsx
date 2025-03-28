import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { BsSearch } from "react-icons/bs"
import { useRef } from "react";

interface Props {
    onSearch: (searchText: string) => void
}
const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form style={{width: '100%'}} onSubmit={(event)=>{
            event.preventDefault()
            if(ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup width={'100%'} paddingLeft={'3'} paddingRight={'1'} flex={1} startElement={<BsSearch/>}>
                <Input ref={ref} flex={"max-content"} borderRadius={20} placeholder="Search games..." variant={"subtle"}/>
            </InputGroup>
        </form>
            
    )
}

export default SearchInput
