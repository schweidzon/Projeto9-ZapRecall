import styled from "styled-components"

function Footer() {
    return (
        <>
            <FooterStyle>
                <h3>0/4 CONCLUÍDOS</h3>
            </FooterStyle>
        </>
    )
}

export default Footer

const FooterStyle = styled.div`
    background-color: #FFFFFF;
    position: absolute;
    bottom: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        h3 {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #333333
        }
`