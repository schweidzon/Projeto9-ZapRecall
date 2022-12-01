import GlobalStyle from "./theme/globalStyle"
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";
import cards from "./CardsArray";

function App() {
  const [openedCards, setOpenedCards] = useState([])
  const [final, setFinal] = useState([])
  const [perguntasRespondidas, setPerguntasRespondidas] = useState(cards.map(() => {""}))
  const [image, setImage] = useState([])
  
  return (
    <>
      <GlobalStyle />
        <Header/>
        <Cards openedCards={openedCards} setOpenedCards={setOpenedCards}
        final={final}
        setFinal={setFinal}
        cards={cards}
        perguntasRespondidas={perguntasRespondidas}
        setPerguntasRespondidas={setPerguntasRespondidas}
        image={image}
        setImage={setImage}
        />
        <Footer
        final={final}
        setFinal={setFinal}
        cards={cards}
        perguntasRespondidas={perguntasRespondidas}
        setPerguntasRespondidas={setPerguntasRespondidas}
        image={image}
        setImage={setImage}
        />
      
    </>

  );
}

export default App;
