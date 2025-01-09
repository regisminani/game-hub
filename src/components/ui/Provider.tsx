import {ChakraProvider, ChakraProviderProps, defaultSystem} from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
const Provider = ({children}: ChakraProviderProps) => {
    return (
        <div>
            <ChakraProvider value={defaultSystem}>
                <ColorModeProvider>
                {children}
                </ColorModeProvider>
            </ChakraProvider>
               
          
        </div>
    )
}

export default Provider
