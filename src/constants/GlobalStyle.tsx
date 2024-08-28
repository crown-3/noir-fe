import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // large title
    h1 {
        font-size: 34px;
        letter-spacing: 0.4px;
        line-height: 41px;
        margin: 0;
    }

    // title 1
    h2 {
        font-size: 28px;
        letter-spacing: 0.38px;
        line-height: 34px;
        margin: 0;
    }

    // title 2
    h3 {
        font-size: 22px;
        letter-spacing: -0.26px;
        line-height: 28px;
        margin: 0;
    }

    // title 3
    h4 {
        font-size: 20px;
        letter-spacing: -0.45px;
        line-height: 25px;
        margin: 0;
    }

    // headline
    h5 {
        font-weight: 600;
        font-size: 17px;
        letter-spacing: -0.43px;
        line-height: 22px;
        margin: 0;
    }
    
    // body
    p {
        font-size: 17px;
        letter-spacing: -0.43px;
        line-height: 22px;
        margin: 0;
    }

    // caption1
    h6 {
        font-weight: normal;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 16px;
        margin: 0;
    }

    // caption2
    small {
        font-weight: normal;
        font-size: 11px;
        letter-spacing: 0.06px;
        line-height: 13px;
        margin: 0;
    }
`;

export default GlobalStyle;
