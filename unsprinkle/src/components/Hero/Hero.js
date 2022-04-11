import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  return (
    <Wrapper>
      <HeroPicture>
        <source
          type="image/avif"
          srcSet="
            /images/hero-img.avif,
            /images/hero-img@2x.avif 2x,
            /images/hero-img@3x.avif 3x
          "
        />
        <source
          type="image/jpg"
          srcSet="
            /images/hero-img.jpg,
            /images/hero-img@2x.jpg 2x,
            /images/hero-img@3x.jpg 3x
          "
        />
        <HeroImage src="/images/hero-img.jpg" alt="Page hero, cat staring at you" />
      </HeroPicture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroPicture = styled.picture`
  display: block;
  max-height: 100%;
  width: 500px;
  height: 500px;
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
