import { useState } from "react"
import styled from "styled-components"
import turnAround from "../assets/images/turnAround.png"
import certo from "../assets/images/icone_certo.png"
import quase from "../assets/images/icone_quase.png"
import errado from "../assets/images/icone_erro.png"

function Cards({ openedCards, setOpenedCards, final, setFinal, cards, answeredQuestions, setAnsweredQuestions, image, setImage, showCards }) {

    const [turnCard, setTurnCard] = useState([])


    function cardOpen(card) {
        const cards = [...openedCards, card.question]
        setOpenedCards(cards)
    }

    function cardTurn(card) {
        const turnCards = [...turnCard, card.answer]
        setTurnCard(turnCards)
    }

    function finalAnswer(card, texto, i) {
        answeredQuestions[i] = texto
        setAnsweredQuestions(answeredQuestions)

        if (answeredQuestions[i] === "Não lembrei") {
            const imagens = [...image, "errado"]

            setImage(imagens)
        } else if (answeredQuestions[i] === "Quase não lembrei") {
            const imagens = [...image, 'quase']
            setImage(imagens)
        } else {
            const imagens = [...image, 'certo']
            setImage(imagens)
        }
        const cartaFinal = [...final, card.question]
        setFinal(cartaFinal)
    }





    return (
        <>
            <CardsContainer show={showCards}>

                {cards.map((card, i) => {

                    return (
                        <>
                            <QuestionCard data-test="flashcard" open={openedCards.includes(card.question)}>
                                <h2 data-test="flashcard-text">Pergunta {i + 1}</h2>
                                <ion-icon data-test="play-btn" onClick={() => cardOpen(card)} name="play-outline"></ion-icon>

                            </QuestionCard>
                            <OpenCards
                                open={openedCards.includes(card.question)}
                                turn={turnCard.includes(card.answer)}
                                data-test="flashcard"
                            >
                                <h2 data-test="flashcard-text" >{card.question}</h2>
                                <img data-test="turn-btn" src={turnAround} onClick={() => cardTurn(card)} />

                            </OpenCards>
                            <TurnedCards
                                turn={turnCard.includes(card.answer)}
                                finish={final.includes(card.question)}
                                data-test="flashcard"
                            >
                                <h1 data-test="flashcard-text" >{card.answer}</h1>
                                <Zapbuttop >
                                    <button data-test="no-btn" onClick={() => finalAnswer(card, "Não lembrei", i)}>Não lembrei</button>
                                    <button data-test="partial-btn" onClick={() => finalAnswer(card, "Quase não lembrei", i)}>Quase não lembrei</button>
                                    <button data-test="zap-btn" onClick={() => finalAnswer(card, "Zap!", i)}>Zap!</button>
                                </Zapbuttop>
                            </TurnedCards>
                            <FinalCard
                                finish={final.includes(card.question)}
                                resposta={answeredQuestions[i]}
                                data-test="flashcard"
                            >
                                <h2 data-test="flashcard-text">{`Pergunta ${i + 1}`}</h2>
                                <Image1 data-test="no-icon" display ={answeredQuestions[i]}  src={errado}/>
                                <Image2 data-test="partial-icon" display ={answeredQuestions[i]} src={quase}  />
                                <Image3 ata-test="zap-icon" display ={answeredQuestions[i]}  src={certo} />
                            </FinalCard>
                        </>
                    )


                })}

            </CardsContainer>
        </>
    )
}

export default Cards

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 300px;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 50px;
    display: ${props => !props.show && 'none'};
`

const QuestionCard = styled.div`
    width: 300px;
    height: 60px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: auto;
    display: ${props => props.open ? 'none' : ''};
   
        h2 {
            font-family: 'Recursive', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
        }
        ion-icon {
            font-size: 30px;
            cursor: pointer;
            --ionicon-stroke-width: 46px;
           
        }
`



const OpenCards = styled.div`
    width: 300px;
    height: 130px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding-top: 18px;
    padding-left: 15px;
    position: relative;
    display : ${props => {
        if (props.open && props.turn === false) {
            return ""
        } else {
            return "none"
        }
    }};
        
        h2 {
            font-family: Recursive;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #333333
        }
        img {
            position: absolute;
            right: 20px;
            bottom: 10px;
            cursor: pointer;
            
        }
`


const TurnedCards = styled.div`
    width: 300px;
    padding: 15px;
    min-height: 130px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display : ${props => {
        if (props.turn && !props.finish) {
            return ""
        } else {
            return "none"
        }
    }};
    
      
`

const Zapbuttop = styled.div`
    display: flex;
    margin-top: 22px;
    gap: 13px;
    button {
         width: 90px;
         font-family: 'Recursive';
         font-style: normal;
         font-weight: 400;
         font-size: 12px;
         line-height: 14px;
         display: flex;
         align-items: center;
         justify-content: center;
         text-align: center;
         color: #FFFFFF;
         background: blue;
         border-radius: 5px;         
         padding:5px;
         cursor: pointer;
         border-style: none;
         &:active {
                box-shadow:rgba(50, 50, 93, 0.25) 0px 10px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 10px 30px -18px inset;
             }
        
    }
    button:nth-of-type(1) {
        background-color: #FF3030;
    }
    button:nth-of-type(2) {
        background-color: #FF922E;
    }
    button:nth-of-type(3) {
        background-color: #2FBE34;
    }
     
    
`

const FinalCard = styled.div`
    width: 300px;
    height: 60px;
    background-color: white;
    color: ${props => {

        if (props.resposta === "Não lembrei") {
            return "#FF3030"
        } else if (props.resposta === 'Quase não lembrei') {
            return "#FF922E"
        } else {
            return "#2FBE34"
        }
    }};
    text-decoration: line-through;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: auto;
    display: ${props => props.finish ? '' : 'none'};
   
        h2 {
            font-family: 'Recursive', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
        }
        
`

const Image1 = styled.img`
display: ${props => props.display === "Não lembrei" ? '' : 'none'};

`
const Image2 = styled.img`
display: ${props => props.display === "Quase não lembrei" ? '' : 'none'};

`
const Image3 = styled.img`
display: ${props => props.display === "Zap!" ? '' : 'none'};

`