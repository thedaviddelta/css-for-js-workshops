import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) =>  (
  <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
        <VisuallyHidden>Close</VisuallyHidden>
      </CloseButton>
      <nav>
        <NavigationLink href="/sale">Sale</NavigationLink>
        <NavigationLink href="/new">New&nbsp;Releases</NavigationLink>
        <NavigationLink href="/men">Men</NavigationLink>
        <NavigationLink href="/women">Women</NavigationLink>
        <NavigationLink href="/kids">Kids</NavigationLink>
        <NavigationLink href="/collections">Collections</NavigationLink>
      </nav>
      <footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </footer>
    </Content>
  </Overlay>
);

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;
  margin-left: auto;
  background-color: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const NavigationLink = styled.a`
  display: block;
  padding: 6px 0;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-child {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  display: block;
  padding: 2px 0;
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;
