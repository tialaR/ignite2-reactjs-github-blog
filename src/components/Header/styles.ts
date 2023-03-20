import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['base-header']};

  //Padding y entre a logo
  padding: 4rem 0 8.375rem;
`;

// Fixar conteúdo do Header a um tamanho máximo de largura
export const HeaderContent = styled.div`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  >img {
    height: 6.125rem;
    width: 9.25rem;
  }
`
