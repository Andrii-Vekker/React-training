import styled from "styled-components";



export const FriendsListItem = styled.li`
width: 250px;
  box-shadow: ${p => p.theme.shadows.shadow};
  border-radius: ${p => p.theme.radii.sm};
  font-weight: ${p => p.theme.fontWeights.bold};
  gap: 5px;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
  padding: 10px;
  :hover{
    background-color:${p => p.theme.colors.primary};
    scale: 1.1;
  
  }

`;

export const IsOnlineChecker = styled.span`
border-radius: ${p => p.theme.radii.round};
width: 12px;
height:12px;
background-color: ${(p) => {
    //    switch (p.isOnline) {
    //        case true:
    //            return "green";
    //        case false:
    //            return "red";
    //    default: return "#fff"
   
    //    }
    ////////////////////////
    return p.isOnline ? "green" : "red"
  }}
`;