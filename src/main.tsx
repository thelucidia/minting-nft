import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';
import { config } from './config/wagmi.ts';

const queryClient = new QueryClient();
TagManager.initialize({ gtmId: 'GTM-KBP8WQV2' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </BrowserRouter>,
);
