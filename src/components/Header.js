import zapRecall from "../assets/images/zapRecall.png"
import styled from "styled-components"

function Header({showCards}) {
    return (
        <HeaderStyled show={showCards}>
            <img src={zapRecall} />
            <h1>ZapRecall</h1>
        </HeaderStyled>
    )
}

export default Header


const HeaderStyled = styled.div`
     display: flex;
     align-items: center;
     margin: 40px 0 20px 0;
     display: ${props => !props.show && "none"};
        h1 {
            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            color: #FFFFFF;
            margin-left: 20px;
           
        }
        img {
            width: 52px;
        }
`


