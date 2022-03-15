import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: {
        fontSize: 0.875,
        icon: 16,
        padding: 24,
        border: 1
    },
    large: {
        fontSize: 1.125,
        icon: 24,
        padding: 32,
        border: 2
    },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <PositionedIcon id={icon} size={sizes[size].icon} />
    <InputElement placeholder={placeholder} $width={width} $sizes={sizes[size]} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color ${COLORS.black};
  }
`;

const InputElement = styled.input`
  width: ${({ $sizes }) => $sizes.width}px;
  border: none;
  border-bottom: ${({ $sizes }) => $sizes.border}px solid ${COLORS.black};
  color: inherit;
  font-weight: bold;
  font-size: ${({ $sizes }) => $sizes.fontSize}rem;
  padding: 7px 12px 5px ${({ $sizes }) => $sizes.padding}px;
  outline-offset: 2px;
  border-radius: 1px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

const PositionedIcon = styled(Icon).attrs({
    strokeWidth: 2,
})`
  position: absolute;
  top: 0;
  left: 2px;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
