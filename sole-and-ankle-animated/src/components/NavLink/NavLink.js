import styled from "styled-components";

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Content>{children}</Content>
    <ContentStyled>{children}</ContentStyled>
  </Wrapper>
);

const Wrapper = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Content = styled.div`
  --scale-default: 1;
  --scale-hover: 0.25;
  transform: scaleY(var(--scale-default));
  
  --transition-function-enter: ease-in;
  --transition-function-leave: ease-out;
  transition: transform 0.25s var(--transition-function-leave);

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover > &,
    ${Wrapper}:focus-visible > & {
      transform: translateY(-100%) scaleY(var(--scale-hover));
      transition-timing-function: var(--transition-function-enter);
    }
  }
`;

const ContentStyled = styled(Content)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  --scale-default: 0.25;
  --scale-hover: 1;
  --transition-function-enter: ease-out;
  --transition-function-leave: ease-in;
`;

export default NavLink;
