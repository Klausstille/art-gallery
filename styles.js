import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
  }

  body {
    color: white;
    margin: 0;
    text-align: center;
    display: grid;
    place-items: center;

    margin: 0 auto;
    min-height: 100vh;
  }

  #__next {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: 2rem;
  }

  img{
    object-fit: cover;
    border-radius: 2px;
  }

  a{color:black; text-decoration:none}

  h1{margin-block:1em}

  .frame {
  height:70vh;
  max-width:90vw;
  aspect-ratio: 3/4;
  background-color:#ddc;
  border:solid 5vmin #eee;
  border-bottom-color:#fff;
  border-left-color:#eee;
  border-radius:2px;
  border-right-color:#eee;
  border-top-color:#ddd;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  display:inline-block;
  position:relative;
  text-align:center;
  margin-block: 1em;

  :before {
    border-radius:2px;
    bottom:-2vmin;
    box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
    content:"";
    left:-2vmin;
    position:absolute;
    right:-2vmin;
    top:-2vmin;
  }
  :after {
    border-radius:2px;
    bottom:-2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
    content:"";
    left:-2.5vmin;
    position:absolute;
    right:-2.5vmin;
    top:-2.5vmin;
  }

}
`;
