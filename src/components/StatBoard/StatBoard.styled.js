import styled from '@emotion/styled';

export const Stats = styled.div`
  width: 500px;
  text-align: center;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.monospace};
  border-top: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderColor};
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backgroundSecondary};

  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
`;
