import Head from "next/head";
import styles from "@/styles/Home.module.css"; 
import {
  useDisconnect, 
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import MockToken from "@/abi/MockToken.json"; 
import Deposit from "@/components/Deposit";
import Withdraw from "@/components/Withdraw";
import { useState } from "react";

const TOKEN_ADDRESS = "0xEdcC3aF7B1F50F093d14b6156aFC3AdC02Fb8cAD";
const SAFE_ADDRESS = "0x3ae5f89c9C948B3802d7E0C1D1993fF7D56b2BB6";

export default function Home() {
  const { disconnect } = useDisconnect(); 
  const [amount, setAmount] = useState(0);

  // useContractWrite
  const { config } = usePrepareContractWrite({
    address: TOKEN_ADDRESS,
    abi: MockToken,
    functionName: "approve",
    args: [SAFE_ADDRESS, amount],
  });

  const {
    data: txData,
    isSuccess: approvalSuccess,
    write,
  } = useContractWrite(config);

  return (
    <>
      <Head>
        <title>WalletConnect | Next Starter Template</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.flexColumn}>
          <div className={styles.flexColumn}>
            <h1 className={styles.headingStyle}> Safe Keep </h1>
            <w3m-button />
            <button onClick={() => disconnect()} className={styles.hookButtons}>
              Disconnect
            </button>
          </div>
          <div className={styles.flexColumn}>
            <h1 className={styles.headingStyle}> Profile</h1>

            <div className={styles.portfolio}>
              <div className={styles.balanceContainer}>
                <Deposit amount={amount} safeAddress={SAFE_ADDRESS} tokenAddress={TOKEN_ADDRESS} />

                <button
                  onClick={() => write?.()}
                  className={styles.hookButtons}
                >
                  {" "}
                  Approve
                </button>
                <input
                  onChange={(e) => setAmount(Number(e.target.value))}
                  type="number"
                />
              </div>
              <div className={styles.balanceContainer}>
                <Withdraw safeAddress={SAFE_ADDRESS}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
