// https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository

// https://documenter.getpostman.com/view/29178674/2s9YJgTfzH

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

    --color-primary: #d87d4a;
    --color-primary-light: #fbaf85;


    --color-red-light: #e5383b;
    --color-red-dark: #da1e37;


    --color-green: #31cb00;
    

    --color-dark: #000;
    --color-dark-1: #101010;
    --color-dark-2:  rgba(0, 0, 0, 0.2);
    --color-dark-3:  rgba(0, 0, 0, 0.8);

    
    --color-white: #fff ;
    --color-white-1: #fafafa;
    --color-white-2: #f1f1f1 ;
    --color-white-3: rgba(255, 255, 255, .4);

  



    --color-gradient-dark: linear-gradient(145deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .25));
    --color-gradient-dark-muted: linear-gradient(145deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .10));
    --color-gradient-dark-1: linear-gradient(145deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .50));
    --color-gradient-light: linear-gradient(145deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .25));


    --color-white-vivid: color-mix(in oklab, var(--color-primary-light) 10%, var(--color-white));
    --color-primary-muted: color-mix(in oklab, var(--color-primary) 80%, var(--color-white));
    --color-primary-dark: color-mix(in oklab, var(--color-primary) 80%, var(--color-dark));
    --color-primary-light-muted: color-mix(in oklab, var(--color-primary-light) 30%, var(--color-white));
    --color-primary-light-dark: color-mix(in oklab, var(--color-primary-light) 80%, var(--color-dark));


    --box-shadow-light: 0 5px 5px 2px rgba(16, 16, 16, 0.2); 
    --box-shadow-light-2: 0 5px 5px 3px rgba(16, 16, 16, 0.1); 
    --box-shadow-dark: 0 5px 10px 6px rgba(16, 16, 16, 0.3); 

    --text-shadow: 
    -0.5px -1px  1px var(--color-primary-muted),
    -0.5px -2px  1px var(--color-primary-light-dark),
    -1px -3px  2px var(--color-white);



    --font-huge: clamp(3.5rem, 4rem, 5.5rem);
    --font-big: 4.5rem;
    --font-medium: 3rem;
    --font-medium-2: 2.5rem;
    --font-small: 2rem;
    --font-tiny: 1.5rem;
    --font-tiny-2: 1.2rem;  


    --padding-huge: 10rem;
    --padding-medium: 7rem;
    --padding-medium-2: 5rem;

    --padding-small: 3rem;
    --padding-tiny: 2rem;
    --padding-tiny-2: 1.5rem;
    --padding-tiny-3: 1.2rem;

    --margin-large: 20rem;
    --margin-huge: 15rem;
    --margin-medium: 10rem;
    --margin-small: 7rem;
    --margin-very-small: 4rem;
    --margin-tiny: 2rem;
    --margin-tiny-2: 1.5rem;
    --margin-tiny-3: 1.2rem;


} 


html {
  font-size: 62.5%;
}

html,body{

  overflow-x: hidden;

}

body {
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
  color: var(--color-white);
  min-height: 100dvh;
  max-width: 100dvw;

  line-height: 1.5;
  font-size: 1.5rem;
  box-sizing: border-box;
}

input,
textarea,
button{
  font: inherit;
  color: inherit;
}

::-webkit-scrollbar-thumb {
  
  background: var( --color-primary-muted ); 

  background-image: var(--color-gradient-dark);

  transition: background-color .2s ease ;
  border-radius: 100vw; 
  

  &:hover {

    background-color: var( --color-primary-light ); 
  background-image: var(--color-gradient-dark);



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
  background-color: var()(--color-primary-light-dark) ;

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
  margin: 0;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
}

img {
  max-width: 100%;
  border-radius: 1rem;
 
}



`;

export default GlobalStyles;
