import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styles";

export const ButtonContainer = styled.button`
    background-color: ${cores.rosa};
    color: ${cores.rosa_claro_tag};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 6px;
    display: inline-block;
    position: absolute;
    bottom: 8px;
    left: 8px;
    border: none;
`

export const ButtonLink = styled(Link)`
    background-color: ${cores.rosa};
    color: ${cores.rosa_claro_tag};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 6px;
    display: inline-block;
    text-decoration: none;
    position: absolute;
    bottom: 8px;
    left: 8px;
    border: none;
`