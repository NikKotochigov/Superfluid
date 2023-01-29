import { WagmiConfig } from "wagmi";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "@/src/consts/wagmiConfiguration";
import { Provider } from 'react-redux';
import { store } from "@/src/store/store";
import { ConnectWallet } from "@/src/components/connect-wallet/connectWallet";

import "@rainbow-me/rainbowkit/styles.css";

export default function Home() {

  return (
    <Provider store={store}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>


          {/* <ConnectButton
          label="Connect wallet"
        // chainStatus="icon"
        // accountStatus="avatar"
        // showBalance={false}
        /> */}

          <ConnectWallet />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  )
}
