import GlobalStyle from "./theme/globalStyle"
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [openedCards, setOpenedCards] = useState([])
  return (
    <>
      <GlobalStyle />
        <Header/>
        <Cards openedCards={openedCards} setOpenedCards={setOpenedCards}/>
        <Footer/>
      
    </>

  );
}

export default App;
