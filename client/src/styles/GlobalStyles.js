import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

    --color-primary: #d87d4a;
    --color-primary-light: #fbaf85;
    --color-dark: #000;
    --color-dark-1: #101010;
    --color-dark-2:  rgba(0, 0, 0, 0.2);
    --color-white: #fff ;
    --color-white-1: #fafafa;
    --color-white-2: #f1f1f1 ;
    --box-shadow-light: 0 5px 5px 3px rgba(16, 16, 16, 0.2); 
    --box-shadow-dark: 0 5px 7px 5px rgba(16, 16, 16, 0.4); 


}



    
html {
  font-size: 62.5%;
}

body {
  font-family: 'Manrope', sans-serif;
  color: var(--color-white);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.5rem;
}

input,
button{
  font: inherit;
  color: inherit;
}



button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


input:disabled {
  background-color: var(--color-white-2);
  color: var(--color-dark);
}



input:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: -1px;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
}

img {
  max-width: 100%;
  border-radius: 1rem;
 
}



`;

export default GlobalStyles;
