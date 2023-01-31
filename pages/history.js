// import Head from 'next/head';
// import { Box, Container, Typography} from '@mui/material';
// import { SettingsNotifications } from '../src/components/layout/settings-notifications';

// const Page = () => (
//   <>
//     <Head>
//       <title>
//       FLOWery | Activity history
//       </title>
//     </Head>
//         <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           sx={{ mb: 3 }}
//           variant="h4"
//         >
//           STREAM
//         </Typography>
//         <SettingsNotifications />
//         <Box sx={{ pt: 3 }}>
//         </Box>
//       </Container>
//     </Box>

//   </>
// );
// export default Page;

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import contract from "../contracts/erc20";
import provider from "../contracts/provider";

export async function getServerSideProps() {
    const symbol = await contract.symbol()
    console.log(symbol);
    const balanceCWT = await contract.totalSupply();
    const num = balanceCWT.toString();
    console.log(num);
    const name = await contract.name()
    console.log(name);
    return {
      props: {symbol, name, num},
    }}

const Page = ({symbol, name, num}) => {
  const [currentAcount, setCurrentAccount] = useState();
  const [add, setAdd] = useState();
  const [balance, setBalance] = useState();
  async function logIn() {
    const address = (await provider.send("eth_requestAccounts", []))[0];
    console.log(address);
    setCurrentAccount(address);
  }

  function logOut() {
    setCurrentAccount("");
  }

  // const handleSetApproverClick = async () => {
  //   const signer = provider.getSigner();
  //   const approvePiggyBankWithSigner = contractERC20.connect(signer);
  //   try {
  //       const tx = await approvePiggyBankWithSigner.setApprover();
  //       console.log("tx: ", tx);
  //       const resoponse = await tx.wait();
  //       console.log("resoponse: ", resoponse);
  //       router.reload();
  //   } catch (error) {
  //       console.error(error);
  //   }}

  const hadleSupply = async () => {
 
      const balance = await contract.balanceOf(add);
      setBalance(balance.toString());

  };

  return (
    <div style={{ textAlign: "center" }}>
      {currentAcount ? (
        <div>
          <h1>{currentAcount}</h1>
          <button onClick={logOut}>Log out</button>{" "}
        </div>
      ) : (
        <button onClick={logIn}>Log in Metamask</button>
      )}

      <div>
        <p>Symbol: {symbol}</p>
        <input
              placeholder="Enter your address"
              value={add}
              onChange={(event) => setAdd(event.target.value)}
              className="inpt"
            />
              <button
                onClick={hadleSupply}
                className="btn ml-3 h-7"
              >
                Check
              </button>
        <p>Balance: {balance}</p>
        <p>Name: {name}</p>
        <p>Supply: {num}</p>
      </div>
      {/* <button onClick={handleSetApproverClick}>Set Approver</button> */}
    </div>
  );
};

export default Page;

