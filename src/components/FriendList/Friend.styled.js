import styled from "@emotion/styled";

const SetBgColor = ({ isOnline, theme }) => {
  if (isOnline) {
    return theme.colors.online;
  }
  return theme.colors.offline;
};

export const FriendStatus = styled.span`
  display: block;
  width: ${(p) => p.theme.space[3]}px;
  height: ${(p) => p.theme.space[3]}px;
  background-color: ${SetBgColor};
  border-radius: ${(p) => p.theme.radii.round};
  margin-bottom: ${(p) => p.theme.space[4]}px;
`;

export const FriendAvatar = styled.img`
  display: block;
`;
export const FriendName = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
