import styled from "styled-components"
import zapImage from "../assets/images/zapRecall.png"


function Welcome({showCards, setShowCards}) {
    return (

        <WelcomePage show={showCards}>
            <img src={zapImage} />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={ () => setShowCards(true)}>Iniciar Recal!!</button>
        </WelcomePage>


    )
}
export default Welcome


const WelcomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    display: ${props => props.show && 'none'} ;
        img {
            width: 136px;
            height: 161px;
        }
        h1 {
            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            color: #FFFFFF;
        }
        button {
            width: 246px;
            height: 54px;
            background: #FFFFFF;
            border: 1px solid #D70900;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            color: #D70900;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            cursor: pointer;
             &:active {
                box-shadow:rgba(50, 50, 93, 0.25) 0px 10px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 10px 30px -18px inset;
             }
        }

`