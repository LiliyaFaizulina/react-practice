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

export const Button = styled.button`

  &:not(:last-child){
    margin-right: 5px;

  }
    padding: 5px 10px;
    display: inline-block;
    cursor: pointer;
    border: none;
    background-color: blueviolet;
    box-shadow: 1px 2px 2px black;
    color: aquamarine;
    transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover, &:focus{
    color: aquamarine;
    background-color: blue;
  }
`
