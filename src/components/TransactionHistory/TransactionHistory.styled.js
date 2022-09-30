import styled from '@emotion/styled';

export const TransactionHistoryTd = styled.td`
  font-family: ${p => p.theme.fonts.monospace};
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
  border-bottom: ${p => p.theme.borders.normal};
  border-bottom-color: ${p => p.theme.colors.borderColor};
  border-right: ${p => p.theme.borders.normal};
  border-right-color: ${p => p.theme.colors.borderColor};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  transition: color 200ms linear, background-color 200ms linear,
    font-weight 200ms linear;

  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
`;

export const TransactionHistoryTr = styled.tr`
  :last-child td {
    border-bottom: ${p => p.theme.borders.none};
  }

  :hover td {
    text-decoration: underline;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
