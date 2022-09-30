import TransactionHistory from "./TransactionHistory";
import {
  TransactionTable,
  TransactionTh,
} from "./TransactionHistoryList.styled";
import PropTypes from "prop-types";

export default function TransactionHistoryList({ data }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <TransactionHistory
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistoryList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
