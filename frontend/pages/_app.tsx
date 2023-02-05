import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygonMumbai, polygon } from "wagmi/chains"

export default function App({ Component, pageProps }: AppProps) {
  const chains = [polygonMumbai];

  const { provider } = configureChains(chains, [
    walletConnectProvider({projectId:"b08c4d212ce5bfdb690669143407dfd1"})
  ]);
  
  const wagmiClient = createClient({
    autoConnect:true,
    connectors: modalConnectors({appName:"Gate to web3", chains}),
    provider
  });

  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
  <WagmiConfig client={wagmiClient}>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row"}}>
      <Sidebar />
      <Component {...pageProps} />
    </div>
    <Web3Modal 
        themeColor="blackWhite"
        themeMode="dark"
        projectId="b08c4d212ce5bfdb690669143407dfd1"
        ethereumClient={ethereumClient}
      />
  </WagmiConfig>
  )
}
