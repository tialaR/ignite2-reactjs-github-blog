import styled from 'styled-components';

export const PostsContainer = styled.div`
  padding-bottom: 6rem;
`;

export const FormContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`;

export const PostDetailContentContainer = styled.div`
  padding: 2.5rem 2rem;
  margin: 0 auto;

  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px
`;

export const PostListContainer = styled.div`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px

  margin: 0 auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 2rem
`;

export const PostDetailMainContainer = styled.main`
  >p {
    font-weight: 400;
    line-height: 160%;

    color: ${props => props.theme['base-text']};
  }
`;

export const PostDetailFooterContainer = styled.footer`
  >span {
    display: flex;

    padding: 1rem;
    margin-top: 1.5rem;
    
    line-height: 160%;

    border-radius: 2px;

    background-color: ${props => props.theme['base-post']};
  }
`;