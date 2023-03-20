import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%; //Se a tela for menor que 1120px ela terá 100% de largura
  max-width: 1024px; // O conteúdo dentro dessa div só cresce até 1024px

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    flex: 1;
    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-border']};

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    &::placeholder {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PublicationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  >span {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%
  }

  >span + span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme['base-span']}
  }
`;

