import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbsWrapper>
                <BreadcrumbList />
            </MobileBreadcrumbsWrapper>
            <Title>Running</Title>
          </div>

          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadcrumbList />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const BreadcrumbList = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  position: relative;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

const MobileBreadcrumbsWrapper = styled.div`
  display: none;

  ${QUERIES.tabletAndDown} {
    display: revert;
    position: absolute;
    top: -20px;
  }
`;

const SelectWrapper = styled.div`
  ${QUERIES.phoneAndDown} {
    display: none;
  }
`;

export default ShoeIndex;
