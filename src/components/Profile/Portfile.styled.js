import styled from 'styled-components';

export const Portile = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  padding-top: ${p => p.theme.space[4]}px;
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
`;
