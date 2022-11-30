import { useState } from "react"
import styled from "styled-components"
import turnAround from "../assets/images/turnAround.png"

function Cards({ openedCards, setOpenedCards }) {


    const [openCard, setOpenCard] = useState(false)
    const [virarCarta, setVirarCarta] = useState(false)
    const [turnCard, setTurnCard] = useState([])
    const [final, setFinal] = useState([])


    function cardOpen(card) {
        const cards = [...openedCards, card.question]
        setOpenedCards(cards)

    }

    function cardTurn(card) {
        const turnCards = [...turnCard, card.answer]
        setTurnCard(turnCards)
        console.log(turnCards)

    }

    function respostaFinal(card) {
        console.log(card)
        const cartaFinal = [...final, card.question]
        setFinal(cartaFinal)
        console.log(cartaFinal)     


    }

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]


    return (

        <>
            <CardsContainer>

                {cards.map((card, i) => {
                    return (
                        <>
                            <QuestionCard open={openedCards.includes(card.question)}>
                                <h2>Pergunta {i + 1}</h2>
                                <ion-icon onClick={() => cardOpen(card)} name="play-outline"></ion-icon>

                            </QuestionCard>
                            <OpenCards
                                open={openedCards.includes(card.question)}
                                turn={turnCard.includes(card.answer)}
                            >
                                <h2>{card.question}</h2>
                                <img src={turnAround} onClick={() => cardTurn(card)} />

                            </OpenCards>
                            <TurnedCards
                                turn={turnCard.includes(card.answer)}
                                finish={final.includes(card.question)}
                            >
                                {card.answer}
                                <Zapbuttop>
                                    <button onClick={() => respostaFinal(card)} >Não Lembrei</button>
                                    <button onClick={() => respostaFinal(card)} >Quase não lembrei</button>
                                    <button onClick={() => respostaFinal(card)} >Zap!</button>
                                </Zapbuttop>
                            </TurnedCards>
                            <FinalCard

                                finish={final.includes(card.question)}
                            >
                                <h2>Pergunta {i + 1}</h2>
                                <ion-icon name="play-outline"></ion-icon>
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
    background-color: red;
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
        ion-icon {
            font-size: 30px;
            cursor: pointer;
            --ionicon-stroke-width: 46px;
        }
`