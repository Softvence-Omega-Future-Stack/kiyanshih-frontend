import TransactionTable from "@/Dashboard/Admin/components/transaction/TransactionTable";
import TransactionTop from "@/Dashboard/Admin/components/transaction/TransactionTop";

const Transaction = () => {
  return (
    <div>
      <TransactionTop />
      <TransactionTable />
    </div>
  );
};

export default Transaction;
