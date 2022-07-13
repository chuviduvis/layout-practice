import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Rubik:wght@400;700&family=Rufina:wght@400;700&display=swap');
    body {
        background: ${({ theme})=> theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Roboto', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

`

export default GlobalStyles