import zapRecall from "../assets/images/zapRecall.png"
import styled from "styled-components"

function Header() {
    return (
        <HeaderStyled>
            <ZapRecallImage src={zapRecall} />
            <h1>ZapRecall</h1>
        </HeaderStyled>
    )
}

export default Header


const HeaderStyled = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 48px;
        h1 {
            font-family: 'Righteous', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            color: #FFFFFF;
           
        }
`


const ZapRecallImage = styled.img`
    width: 52px;
    height: 60px;
    
`