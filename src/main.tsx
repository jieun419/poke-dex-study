import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import MyApp from './MyApp.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
