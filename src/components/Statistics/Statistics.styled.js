import styled from "@emotion/styled";

export const Label = styled.span`
  font-size: ${(p) => p.theme.fontSizes.s};
  color: ${(p) => p.theme.colors.secondText};
  margin-bottom: ${(p) => p.theme.space[3]}px;
`;

export const Percentage = styled.span`
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
