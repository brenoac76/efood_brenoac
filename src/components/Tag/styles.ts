import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
    background-color: ${cores.rosa};
    color: ${cores.rosa_claro_tag};
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: 700;
    padding: 4px 6px;
    display: inline-block;
`
