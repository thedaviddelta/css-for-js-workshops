import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => (
  <Container $value={value} $size={size}>
    <Track $value={value} />
    <VisuallyHidden>{value}%</VisuallyHidden>
  </Container>
);

const containerSizes = {
    small: {
        height: 8,
        radius: 4,
        padding: 0
    },
    medium: {
        height: 12,
        radius: 4,
        padding: 0
    },
    large: {
        height: 24,
        radius: 8,
        padding: 4
    },
}

const Container = styled.div.attrs(({ $value, $size }) => ({
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": $value,
    $sizes: containerSizes[$size]
}))`
  width: 500px;
  height: ${({ $sizes }) => $sizes.height}px;
  border-radius: ${({ $sizes }) => $sizes.radius}px;
  padding: ${({ $sizes }) => $sizes.padding}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const Track = styled.div.attrs(({ $value }) => ({
    $radiusRight: ($value > 98 ? ($value - 98) * 2 : 0).toFixed(1) + "px"
}))`
  width: ${({ $value }) => $value}%;
  height: 100%;
  border-radius: 4px ${({ $radiusRight }) => $radiusRight + " " + $radiusRight} 4px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
