import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Wrapper>
        {displayedValue}
        <ChevronIcon />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  isolation: isolate;
  position: relative;
  width: max-content;
`;

const SelectElement = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: transparent;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${SelectElement}:hover ~ & {
    color: ${COLORS.black};
  }

  ${SelectElement}:focus ~ & {
    outline: 2px solid;
    outline-color: -webkit-focus-ring-color;
    outline-color: Highlight;
  }
`;

const ChevronIcon = styled(Icon).attrs({
    id: "chevron-down",
    size: 24,
    strokeWidth: 2
})`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export default Select;
