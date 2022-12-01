import styled from "styled-components"

function Footer({final, setFinal, cards, perguntasRespondidas, setPerguntasRespodindas}) {
    return (
        
        <>
            <FooterStyle>
                {final.length}/{cards.length} CONCLUÍDOS
            </FooterStyle>
        </>
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
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: 'Recursive';
   font-weight: 400;
   font-size: 18px;
   color: #333333;
   padding: 10px;
`