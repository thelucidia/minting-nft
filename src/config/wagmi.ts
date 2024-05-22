import { http, createConfig } from 'wagmi'
import { skaleNebulaTestnet } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

const projectId = '6a2e9030474264df3b50c650c2b521b5'

export const config = createConfig({
  chains: [skaleNebulaTestnet],
  connectors: [
    metaMask(),
    walletConnect({ projectId }),
  ],
  transports: {
    [skaleNebulaTestnet.id]: http(),
  },
})