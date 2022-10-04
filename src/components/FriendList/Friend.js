import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName } from './Friend.styled';

export default function Frined({ avatar, name, isOnline }) {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar className="avatar" src={avatar} alt={name} width="48" />
      <FriendName className="name">{name}</FriendName>
    </>
  );
}

Frined.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
