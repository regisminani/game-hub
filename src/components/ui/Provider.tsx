import {ChakraProvider, ChakraProviderProps, defaultSystem} from '@chakra-ui/react'
const Provider = ({children}: ChakraProviderProps) => {
    return (
        <div>
            <ChakraProvider value={defaultSystem}>
                {children}
            </ChakraProvider>
               
          
        </div>
    )
}

export default Provider
