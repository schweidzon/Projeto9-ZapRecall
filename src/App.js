import GlobalStyle from "./theme/globalStyle"
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import { useState } from "react";
import cards from "./CardsArray";

function App() {
  const [openedCards, setOpenedCards] = useState([])
  const [final, setFinal] = useState([])
  const [answeredQuestions, setAnsweredQuestions] = useState(cards.map(() => {""}))
  const [image, setImage] = useState([])
  const [showCards, setShowCards] = useState(false)
  
  return (
    <>
      <GlobalStyle />
        <Welcome showCards={showCards} setShowCards={setShowCards}/>
        <Header showCards={showCards}/>
        <Cards openedCards={openedCards} setOpenedCards={setOpenedCards}
        final={final}
        setFinal={setFinal}
        cards={cards}
        answeredQuestions={answeredQuestions}
        setAnsweredQuestions={setAnsweredQuestions}
        image={image}
        setImage={setImage}
        showCards={showCards}
        />
        <Footer
        final={final}
        cards={cards}
        answeredQuestions={answeredQuestions}
        image={image}
        />
    </>

  );
}

export default App;
