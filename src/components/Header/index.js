import React from 'react'
import {Link} from 'react-router-dom';

import {Wrapper, Content } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        Simple movie app
      </Link>
    </Content>
  </Wrapper>
);
export default Header;

