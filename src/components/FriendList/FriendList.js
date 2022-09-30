import PropTypes from "prop-types";
import Friend from "./Friend";
import {
  FriendBoard,
  UserFriendList,
  UserFriendItem,
} from "./FriendList.styled";

export default function FriendList({ friend }) {
  return (
    <FriendBoard>
      <UserFriendList>
        {friend.map(({ id, avatar, name, isOnline }) => (
          <UserFriendItem key={id}>
            <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
          </UserFriendItem>
        ))}
      </UserFriendList>
    </FriendBoard>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
