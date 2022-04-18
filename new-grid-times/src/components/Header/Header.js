import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <MobileWrapper>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileWrapper>

      <DesktopWrapper>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <MainHeader>
          <Logo />
        </MainHeader>
        <SubscriptionSide>
          <Button>Subscribe</Button>
          <SubscriptionLink href="">
            Already a subscriber?
          </SubscriptionLink>
        </SubscriptionSide>
      </DesktopWrapper>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const MobileWrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopWrapper = styled(MaxWidthWrapper)`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid: auto-flow / 1fr auto 1fr;
    align-items: baseline;
  }
`;

const SubscriptionSide = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SubscriptionLink = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-900);
  text-decoration: underline;
`;

export default Header;
