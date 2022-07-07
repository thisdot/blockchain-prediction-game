import Header from './components/Header/Header';
import DataFeedTable from './components/DataFeedTable/DataFeedTable';
import ActivePredictions from './components/ActivePredictions/ActivePredictions';
import { useMoralis } from 'react-moralis';
import { SendFromEscrowAddress } from './components/TransferSolana/TransferSolanaEscrow';
import { SendFromClientAddress } from './components/TransferSolana/TransferSolanaClient';
import UserBetsTable from './components/UserBetsTable/UserBetsTable';

function App() {
  const { isInitialized } = useMoralis();

  return (
    <>
      <Header />
      <DataFeedTable />
      {
        isInitialized && (
          <>
            <ActivePredictions />
            <SendFromEscrowAddress />
            <SendFromClientAddress />
            <UserBetsTable />
          </>
        )
      }
    </>
  );
}

export default App;