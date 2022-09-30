import PropTypes from 'prop-types';
import UserCard from '../UserCard/userCard';
import { Portile } from './Portfile.styled';

export default function Profile({ user }) {
  return (
    <Portile>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Portile>
  );
}

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
