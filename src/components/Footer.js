import styled from "styled-components"
import certo from "../assets/images/icone_certo.png"
import quase from "../assets/images/icone_quase.png"
import errado from "../assets/images/icone_erro.png"
import parabens from "../assets/images/parabens.png"
import putz from "../assets/images/putz.png"

function Footer({ final, cards, answeredQuestions, image, showCards }) {

    if (final.length < cards.length) {
        return (
            <>
                <FooterStyle show={showCards} data-test="footer">
                    {final.length}/{cards.length}
                    CONCLUÍDOS
                    <FooterBonus image={image} showCards={showCards}></FooterBonus>
                </FooterStyle>
            </>
        )

    } else {
        if (!answeredQuestions.includes("Não lembrei")) {

            return (
                <FooterStyle show={showCards}>
                    <footer data-test="finish-text">
                        <div>
                            <img src={parabens} />
                            <p>Parabéns!</p>
                        </div>
                        <h1>Você não esqueceu de nenhum flashcard!</h1>
                    </footer>

                    {final.length}/{cards.length} CONCLUÍDOS
                    <FooterBonus image={image}></FooterBonus>
                </FooterStyle>
            )

        } else {
            return (
                <FooterStyle show={showCards}>
                    <footer data-test="finish-text">
                        <div>
                            <img src={putz} />
                            <p>Putz...</p>
                        </div>
                        <h1>Ainda faltam alguns... Mas não desanime!</h1>
                    </footer>

                    {final.length}/{cards.length} CONCLUÍDOS
                    <FooterBonus image={image}></FooterBonus>
                </FooterStyle>

            )
        }

    }

}

function FooterBonus({ image, showCards }) {
    return (
        <FooterBonusStyle show={showCards}>
            {image.map((image) => {
                if (image === "errado") {
                    return <img data-test="no-icon" src={errado} />
                } else if (image === "quase") {
                    return <img data-test="partial-icon" src={quase} />
                } else if (image === "certo") {
                    return <img data-test="partial-icon" src={certo} />
                }
            })}
        </FooterBonusStyle>
    )
}


export default Footer

const FooterStyle = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  display: ${props => !props.show && "none"};
    img:first-child {
        width: 23px;
    }
    p {
        font-weight: bold;
    }
    div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    footer {
        width: 220px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
   
   
`

const FooterBonusStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 5px;
margin-top: 5px;


`