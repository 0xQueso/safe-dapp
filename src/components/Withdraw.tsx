import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import styles from "@/styles/Home.module.css";
import Safe from "@/abi/Safe.json";
import { useState } from "react";

const Withdraw = ({ safeAddress }: any) => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const { config } = usePrepareContractWrite({
    address: safeAddress,
    abi: Safe,
    functionName: "withdrawTokens",
    args: [withdrawAmount],
  });

  const { data: safeContractReadData, isSuccess: safeContractReadSuccess } =
    useContractRead({
      address: safeAddress,
      abi: Safe,
      functionName: "contractBalance",
    });

  const {
    data: mintData,
    isSuccess: mintSuccess,
    write,
  } = useContractWrite(config);

  return (
    <>
      <h4> Safe MT balance: </h4>
      {safeContractReadSuccess ? safeContractReadData?.toString() : null}
      <input
        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
        type="number"
      />
      <button onClick={() => write?.()} className={styles.hookButtons}>
        Withdraw
      </button>
    </>
  );
};

export default Withdraw;
