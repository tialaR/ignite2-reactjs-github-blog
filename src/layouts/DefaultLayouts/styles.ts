import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 2.5rem); // Altura da tela toda
  
  background-color: ${(props) => props.theme['base-background']};
  border-radius: 8px; /* Para essa prop sempre usaremos a medida absoluta em pixel */

  display: flex;
  flex-direction: column;
`