import styled from 'styled-components';

export const PostsContainer = styled.div`
  padding-bottom: 6rem;

  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`;

export const PostListContainer = styled.div`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px
  margin: 0 auto;

  display: grid;

  grid-template-columns: 49% 49%;
  gap: 2rem
`;
