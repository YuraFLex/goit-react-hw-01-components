import styled from "@emotion/styled";

export const FriendBoard = styled.div`
  width: 600px;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
`;

export const UserFriendList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: ${(p) => p.theme.space[0]}px;
  padding: ${(p) => p.theme.space[0]}px;
`;

export const UserFriendItem = styled.li`
  width: calc(100% / 5);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: ${(p) => p.theme.borders.normal};
  border-color: ${(p) => p.theme.colors.borderColor};
  padding: ${(p) => p.theme.space[4]}px;
`;
