import React from 'react';

import logoImg from '../../assets/icons/logo.svg'

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
        <S.HeaderContent>
            <img src={logoImg} alt="" />
        </S.HeaderContent>
    </S.HeaderContainer>
  );
}

export default Header;