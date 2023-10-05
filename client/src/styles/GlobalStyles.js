import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

    --color-primary: #d87d4a;
    --color-primary-light: #fbaf85;
    --color-red-light: #e5383b;
    --color-red-dark: #da1e37;
    
    --color-dark: #000;
    --color-dark-1: #101010;
    --color-dark-2:  rgba(0, 0, 0, 0.2);
    --color-dark-3:  rgba(0, 0, 0, 0.8);
    --color-white: #fff ;
    --color-white-1: #fafafa;
    --color-white-2: #f1f1f1 ;
    --box-shadow-light: 0 5px 5px 3px rgba(16, 16, 16, 0.2); 
    --box-shadow-dark: 0 5px 10px 6px rgba(16, 16, 16, 0.3); 

    --color-gradient-dark: linear-gradient( 145deg, rgba(0, 0, 0, .25), rgba(0, 0, 0, .25) )
    --color-gradient-dark: linear-gradient( 145deg, rgba(255, 255, 255, .25), rgba(255, 255, 255, .25) )


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

::-webkit-scrollbar-thumb {

  background-color: var( --color-primary ); 

  transition: background-color .2s ease ;
  border-radius: 100vw; 
  border: 1px solid var(--color-dark-2) ;
  

  &:hover {

  background-color: var( --color-primary-light ); 


  }

}
  
::-webkit-scrollbar {
  
  width: 2.5rem;
  height: 2rem;


}


::-webkit-scrollbar-track {

  background-color: var(--color-dark-2); 

  margin-block: 1rem;
  
  
  border-radius: 100vw;



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
