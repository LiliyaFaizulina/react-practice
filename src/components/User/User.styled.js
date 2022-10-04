import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ isOrange }) => (isOrange ? 'orange' : 'pink')};
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 16px;
  color: tomato;
  &:hover {
    color: blueviolet;
  }
  &:hover ${Span} {
    color: blueviolet;
  }
`;
