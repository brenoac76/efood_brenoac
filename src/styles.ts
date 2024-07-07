import { createGlobalStyle } from 'styled-components';

export const cores = {
  branca: '#FFFFFF',
  rosa_claro: '#FFF8F2',
  rosa: '#E66767',
  rosa_claro_tag: '#FFEBD9',
  dourado_star: '#FFB930',
};
export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;

}

body {
    background-color: ${cores.rosa_claro};

}

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}


.image {
    height: 1em; /* Altura da imagem igual ao tamanho da fonte */
    vertical-align: middle; /* Alinhamento vertical da imagem com o texto */
    margin-right: 8px;
}
`;
