import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import styles from "@/styles/Home.module.css";
import MockToken from "@/abi/MockToken.json";
import Safe from "@/abi/Safe.json";

const Deposit = ({ amount, safeAddress, tokenAddress }: any) => {
  const { address } = useAccount();

  const { data: contractReadData, isSuccess: contractReadSuccess } =
    useContractRead({
      address: tokenAddress,
      abi: MockToken,
      functionName: "balanceOf",
      args: [address],
    });

  const { config } = usePrepareContractWrite({
    address: safeAddress,
    abi: Safe,
    functionName: "depositTokens",
    args: [amount],
  });

  const {
    data: depositData,
    isSuccess: depositSuccess,
    write,
  } = useContractWrite(config);

  return (
    <>
      <h4>MT Balance:</h4>
      {contractReadSuccess ? contractReadData?.toString() : null}
      <button onClick={() => write?.()} className={styles.hookButtons}>
        Deposit
      </button>
    </>
  );
};

export default Deposit;
