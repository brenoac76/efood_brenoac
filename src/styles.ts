import { createGlobalStyle } from 'styled-components';

export const cores = {
  branca: '#FFFFFF',
  rosa_claro: '#FFF8F2',
  rosa: '#E66767',
  rosa_claro_tag: '#FFEBD9',
  dourado_star: '#FFB930',
  cinza_input: '#4b4b4b',
  amarelo_alert: '#FFFF00',
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        width: 100%;
        box-sizing: border-box;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    .image {
        height: 1em;
        vertical-align: middle;
        margin-right: 8px;
    }
`;
