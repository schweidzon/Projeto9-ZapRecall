import { useState } from "react"
import styled from "styled-components"
import turnAround from "../assets/images/turnAround.png"

function Cards() {
    return (
        <>
            <CardsContainer>
                <CardsStyle>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </CardsStyle>
                <CardsStyle>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </CardsStyle>
                <OpenCards>
                    <h2>O que é JSX?</h2>
                    <img src={turnAround} />
                </OpenCards>
                <TurnedCards>
                    <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
                    <Zapbuttop>
                        <div>Não Lembrei</div>
                        <div>Quase não lembrei</div>
                        <div>Zap!</div>
                    </Zapbuttop>
                </TurnedCards>
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

const CardsStyle = styled.div`
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
        }
`


const TurnedCards = styled.div`
    width: 300px;
    height: 130px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding-top: 18px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    
        h2 {
            font-family: Recursive;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #333333
        }
      
`

const Zapbuttop = styled.div`
    display: flex;
    margin-top: 22px;
    gap: 13px;
        div {
            width: 85px;
            height: 37px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Recursive';
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #FFFFFF;
            border-radius: 5px;
            text-align: center;
        }
        div:first-child {
            background-color: #FF3030;
        }
        div:nth-child(2) {
            background-color: #FF922E;
            
        }
        div:nth-child(3) {
            background-color: #2FBE34;
        }
`