
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import cards from "../CardsArray"
import {useState} from "react"


function CardsPage({showCards}) {

    const [openedCards, setOpenedCards] = useState([])
    const [final, setFinal] = useState([])
    const [answeredQuestions, setAnsweredQuestions] = useState(cards.map(() => [""]))
    const [image, setImage] = useState([])
    
    return (
        <>
            <Header showCards={showCards} />
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
                showCards={showCards}
            />
        </>

    )
}

export default CardsPage