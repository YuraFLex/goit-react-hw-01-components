import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 640px;
  text-align: left;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  border-collapse: collapse;
  background: ${p => p.theme.colors.background};
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  border-radius: ${p => p.theme.radii.normal};
  margin: 0 auto;
`;

export const TransactionTh = styled.th`
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.backgroundSecondary};
  border-bottom: ${p => p.theme.borders.normal};
  border-bottom-color: ${p => p.theme.colors.borderColor};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
