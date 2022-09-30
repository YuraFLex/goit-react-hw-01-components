import PropTypes from "prop-types";
import {
  Description,
  Avatar,
  UserName,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from "./UserCard.styled";
import defaultImage from "./defaultImage.png";

export default function UserCard({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats,
}) {
  return (
    <>
      <Description>
        <Avatar src={avatar ?? defaultImage} alt={username} width={200} />
        <UserName>{username}</UserName>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </>
  );
}

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
