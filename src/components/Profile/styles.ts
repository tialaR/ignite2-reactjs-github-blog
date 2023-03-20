import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px

  padding: 2rem 2.5rem;
  margin-left: auto;
  margin-right: auto;

  margin-top: -5rem;
  
  background-color: ${props => props.theme['base-profile']};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const ProfileMainContainer = styled.div`
    position: relative;

    width: 100%;
    
    display: flex;
    flex-direction: column;
`;

export const ProfileImageContainer = styled.div`
  margin-right: 2rem;

  >img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`;

export const ProfileDescriptionsContainer = styled.div`
  >h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
`;

export const ProfileInfoContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;

  >div {
    margin-right: 1.5rem;

    display: flex;
    align-items: center;

    >img {
        width: 1.125rem;
        height: 1.125rem;

        margin-right: 0.5rem;
    }
  }
`;

export const GitHubAccessLink = styled.button`
    position: absolute;
    top: 0;
    right: 0;

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
`;
