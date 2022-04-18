import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </StoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  & > * {
    border: 0 solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletAndUp} {
    grid:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories"
      / 2fr 1fr;
    gap: 48px 0;
    
    & > *:first-of-type {
      border-right-width: 1px;
      padding-right: 16px;
      margin-right: 16px;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement"
      / 5fr 4fr 3fr;
    gap: 0;

    & > *:nth-of-type(-n + 2) {
      border-right-width: 1px;
      padding-right: 16px;
      margin-right: 16px;
    }

    & > *:last-of-type {
      border-top-width: 1px;
      padding-top: 16px;
      margin-top: 16px;
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const StoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    ${OpinionStoryList} > & {
      flex: 1;
      border: revert;
      padding: revert;
      margin: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
