import { Box } from "../constans";

import Profile from "./Profile/Profile";
import userInfo from "../data/user.json";

import StatBoard from "./StatBoard/StatBoard";
import dataStat from "../data/data.json";

import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";

import TransactionHistoryList from "./TransactionHistory/TransactionHistoryList";
import transaction from "../data/transactions.json";

export default function App() {
  return (
    <Box as="main">
      <Box as="section" display="flex" justifyContent="center" py={5}>
        <Profile user={userInfo} />
      </Box>
      <Box as="section" display="flex" justifyContent="center" py={5}>
        <StatBoard title={"upload stats"} data={dataStat} />
      </Box>
      <Box as="section" display="flex" justifyContent="center" py={5}>
        <FriendList friend={friends} />
      </Box>
      <Box as="section" display="flex" justifyContent="center" py={5}>
        <TransactionHistoryList data={transaction} />
      </Box>
    </Box>
  );
}
