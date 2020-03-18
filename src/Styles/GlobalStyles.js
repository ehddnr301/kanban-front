import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    body{
        background-color:#777777;
        font-family: "Baloo Chettan 2", cursive;
    }
`;
