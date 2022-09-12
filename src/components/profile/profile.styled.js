import styled from "styled-components";

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: auto;
    padding: 10px;
    background: ${p => p.theme.colors.white};
`

export const UserPhoto = styled.img`
border-radius: ${p => p.theme.radii.round};
background: ${p => p.theme.colors.primary};
height: 100px;
width: 100px
`

export const Stats = styled.ul`
background: ${p => p.theme.colors.text};
font-size: ${p => p.theme.fontSizes.xs};
width: 222px;
margin: 0 auto;
list-style: none;
display: grid;
  grid-template-columns: repeat(3, 1fr);
padding: 0
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${p => p.theme.borders.normal };
    border-color: ${p => p.theme.colors.background}

`

export const Title = styled.h1`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.l};
`

export const Info = styled.p`
color:${p => p.theme.colors.background};
`