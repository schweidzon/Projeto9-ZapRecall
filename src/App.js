import GlobalStyle from "./theme/globalStyle"
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [openedCards, setOpenedCards] = useState([])
  const [final, setFinal] = useState([])
  const cards = [
    { pergunta: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { pergunta: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { pergunta: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { pergunta: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { pergunta: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { pergunta: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
  return (
    <>
      <GlobalStyle />
        <Header/>
        <Cards openedCards={openedCards} setOpenedCards={setOpenedCards}
        final={final}
        setFinal={setFinal}
        cards={cards}
        />
        <Footer
        final={final}
        setFinal={setFinal}
        cards={cards}
        />
      
    </>

  );
}

export default App;
