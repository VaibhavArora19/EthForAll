import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonMumbai } from "wagmi/chains"
import { AuthProvider } from '@arcana/auth'
import { ProvideAuth } from '@arcana/auth-react'

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

  const authProvider = new AuthProvider('3d5a0d7ce8e418d03320fb8767f4dbd24084928b');

  return (
  <WagmiConfig client={wagmiClient}>
  <ProvideAuth provider={authProvider}>  
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
    </ProvideAuth>
  </WagmiConfig>
  )
}
