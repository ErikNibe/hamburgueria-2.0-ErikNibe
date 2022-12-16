import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family:"Inter", sans-serif;
    }

    :root {
        --primary: #27AE60;
        --primary50: #93D7AF;
        --secundary: #EB5757;

        --gray600: #333333;
        --gray300: #828282;
        --gray200: #999999;
        --gray100: #E0E0E0;
        --gray0: #F5F5F5;

        --white: #FFFFFF;

        --negative: #E60000;
    }
`