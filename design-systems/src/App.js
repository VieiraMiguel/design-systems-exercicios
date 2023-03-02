import { ChakraProvider, Flex } from "@chakra-ui/react"
import Button from "./Button"
import Card from "./Card"
import { Produtos } from "./Produtos"


function App() {
  return (
    <ChakraProvider resetCSS>

      <Button />

        {Produtos.map(produto => {
          return (<Card key={produto.id}
            produto={produto} />)
        })}
     
    </ChakraProvider>
  )
}

export default App;
