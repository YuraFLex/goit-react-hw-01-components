import PropTypes from 'prop-types';

import Statistics from '../Statistics/Statistics';
import { Stats, Title, StatsList, StatsItem } from './StatBoard.styled';

export default function StatBoard({ title, data }) {
  return (
    <Stats>
      {title ? <Title>{title}</Title> : null}
      <StatsList>
        {data.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Statistics label={label} percentage={percentage} />
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
}

StatBoard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
