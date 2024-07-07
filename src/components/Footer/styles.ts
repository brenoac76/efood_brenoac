import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.footer`
    background-color: ${cores.rosa_claro_tag};
    Width: 1366px;
    Height: 298px;
    
`

export const Logo = styled.div`
    padding-left: 621px; 
    padding-top: 40px;
    width: 100%; 
`
export const Links = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    gap: 8px; /* Espaço entre os links */
    margin-left: 639px; /* Margem esquerda */
    margin-top: 32.5px; /* Margem acima dos links */
`

export const Texto = styled.p`
    font-size: 10px;
    font-weight: 400;
    color: ${cores.rosa};
    line-height: 11.72px;
    text-align: center;
    margin-top: 80px;
    
`

