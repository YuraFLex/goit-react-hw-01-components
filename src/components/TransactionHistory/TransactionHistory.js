import {
  TransactionHistoryTd,
  TransactionHistoryTr,
} from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <TransactionHistoryTr>
      <TransactionHistoryTd>{type}</TransactionHistoryTd>
      <TransactionHistoryTd>{amount}</TransactionHistoryTd>
      <TransactionHistoryTd>{currency}</TransactionHistoryTd>
    </TransactionHistoryTr>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
