import styled from 'styled-components';

export const PostDetailHeaderContainer = styled.div`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px

  padding: 2rem 2.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5rem;
  
  background-color: ${props => props.theme['base-profile']};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

export const PostDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;
`;

export const PostDetailBackButton = styled.button`
    display: flex;
    align-items: center;

    cursor: pointer;
    border: 0;
    background: transparent;

    >span {
        gap: 0.5rem;
        display: flex;

        color: ${props => props.theme.blue};

        font-size: 0.75rem;
        font-weight: 700;
    }

    >img {
      margin-right: 0.5rem;
    }
`;

export const PostDetailAccessButton = styled.button`
    display: flex;
    align-items: center;

    cursor: pointer;
    border: 0;
    background: transparent;

    >span {
        gap: 0.5rem;
        display: flex;

        color: ${props => props.theme.blue};

        font-size: 0.75rem;
        font-weight: 700;
    }

    >img {
      margin-left: 0.5rem;
    }
`;

export const PostDetailMainContainer = styled.div`    
    display: flex;
    flex-direction: column;
`;

export const ProfileDescriptionsContainer = styled.div`
  >h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
`;

export const PostDetailFooterContainer = styled.div`
  margin-top: 1.25rem;

  display: flex;

  >div {
    margin-right: 2rem;

    display: flex;
    align-items: center;

    >img {
        width: 1.125rem;
        height: 1.125rem;

        margin-right: 0.5rem;
    }
  }
`;


