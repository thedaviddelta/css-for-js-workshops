import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcPath = src.replace(/\.[^.]*$/, "");
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source
            type="image/avif"
            srcSet={`
              ${srcPath}.avif,
              ${srcPath}@2x.avif 2x,
              ${srcPath}@3x.avif 3x
            `}
          />
          <source
            type="image/jpg"
            srcSet={`
              ${srcPath}.jpg,
              ${srcPath}@2x.jpg 2x,
              ${srcPath}@3x.jpg 3x
            `}
          />
          <Image src={src} alt={alt} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  display: block;
  height: fit-content;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0;
  color: var(--color-gray-800);
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
