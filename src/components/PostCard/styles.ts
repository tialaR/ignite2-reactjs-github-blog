import styled from 'styled-components';

export const PostCardContainer = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;

  background-color: ${props => props.theme['base-post']};

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-profile']};
    /* 0 no eixo x, 0 no eixo y, 0 de blur e com a cor yellow-dark */
  }
`;

export const PostCardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const PostTitle = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;

  display: flex;
  width: 80%;

  margin-bottom: 1.25rem;
  padding-right: 2rem;

  color: ${(props) => props.theme['base-title']};
  text-align: left;
`;

export const Time = styled.span`
  display: flex;
  
  text-align: right;
  
  color: ${props => props.theme['base-span']};

  font-size: 0.875rem;
`;


export const PostResume = styled.p`
  >p {
    color: ${props => props.theme['base-text']};

    text-align: left;
    line-height: 160%;

    display: -webkit-box;
    text-overflow: ellipsis; /* adiciona “...” no final */
    overflow: hidden; /* remove o estouro do elemento */
    -webkit-line-clamp: 4; /* quantidade de linhas do p */
    -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
  }
`;

