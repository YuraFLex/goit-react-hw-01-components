import PropTypes from "prop-types";
import { Label, Percentage } from "./Statistics.styled";

export default function Statistics({ label, percentage }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
}

Statistics.propType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
