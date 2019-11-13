import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoSrc from './resources/NOTA_logo_white.svg';

export const LogoContainer = styled.div`
  padding: 30px;
`;

const Logo = () => (
  <LogoContainer>
    <Link to="/">
      <img src={LogoSrc} />
    </Link>
  </LogoContainer>
);

export default Logo;
