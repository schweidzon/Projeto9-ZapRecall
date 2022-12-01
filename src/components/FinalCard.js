import styled from "styled-components"
import cards from "../CardsArray"

export default function FinalCard({ finish }) {
    return (
        <CardsContainer>
              {cards.map((card) => {
                    <Card finish={finish}>
                        <h2>{card.pergunta}</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </Card>
            })}

        </CardsContainer>
      


    )
}

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 300px;
    margin: auto;
    margin-top: 45px;
`


const Card = styled.div`
    width: 300px;
    height: 60px;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: auto;
   
   
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