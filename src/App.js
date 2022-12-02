import GlobalStyle from "./theme/globalStyle"
import Welcome from "./components/Welcome";
import { useState } from "react";
import CardsPage from "./components/CardsPage"

function App() {
  
  const [showCards, setShowCards] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Welcome showCards={showCards} setShowCards={setShowCards} />
      <CardsPage showCards={showCards}/>
    </>

  );
}

export default App;
