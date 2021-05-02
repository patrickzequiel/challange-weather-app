import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --gradient: -webkit-linear-gradient(to right, #ffe259, #ffa751); /* Chrome 10-25, Safari 5.1-6 */
        --gradient2: linear-gradient(to right, #ffe259, #ffa751); 
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #463F5F;
        --text-boby: #FFFFFF;

        --background: #F0F2F5;
        --shape: #FFFFFF;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #ffe259;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ffa751, #ffe259);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ffa751, #ffe259); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-font-smooting: antialiased;
    }

    html{
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
        color: #fff;
    }
        
    button{
        cursor: pointer;
    }


    [disabled] {
        opacity: 0.6px;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;
        
        &:hover {
        filter: brightness(0.8)
    }
    }


`
