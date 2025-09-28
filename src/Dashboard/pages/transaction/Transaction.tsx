import TransactionTable from "@/Dashboard/components/transaction/TransactionTable";
import TransactionTop from "@/Dashboard/components/transaction/TransactionTop";

const Transaction = () => {
  return (
    <div>
      <TransactionTop />
      <TransactionTable />
    </div>
  );
};

export default Transaction;
