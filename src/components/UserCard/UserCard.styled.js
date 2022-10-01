import styled from '@emotion/styled';
import { theme } from '../../constans';

export const Description = styled.div`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondText};
`;

export const Avatar = styled.img`
  display: block;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: ${p => theme.space[0]}px;
  margin: ${p => theme.space[0]}px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-family: ${p => p.theme.fonts.monospace};
  border-top: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderColor};
  background-color: ${p => p.theme.colors.backgroundSecondary};
  padding: ${p => p.theme.space[4]}px;

  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.secondText};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
