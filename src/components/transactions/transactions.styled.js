import styled from "styled-components";

export const Thead = styled.thead`

background:${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};

`



export const Trow = styled.tr`
background: ${p => {
   return p.rowIndex % 2 && p.theme.colors.text  
    // if (p.rowIndex % 2) {
    //     return p => p.theme.colors.text
    // }
}}

`