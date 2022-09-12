import styled from "styled-components";
// import getRandomHexColor from "components/randomColors";

export const StatsTitle = styled.h1`
width:250px;
margin: 0;
text-align: center;
background: ${p => p.theme.colors.white};
`

export const InfoBox = styled.ul`
list-style: none;
margin-top: 0;
margin-bottom: 0;
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 0
`

export const Info = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`